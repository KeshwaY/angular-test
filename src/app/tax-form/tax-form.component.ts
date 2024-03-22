import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { City } from '../model/city';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
import { TaxCalculatorService } from '../services/tax-calculator.service';

@Component({
  selector: 'app-tax-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <div>
    <h2>Tax Calculator</h2>
    <p> Selected city is: {{ selectedCity?.name }}</p>
    <form [formGroup]="taxForm" (ngSubmit)="calculate()">
      <label for="start-time-selector">Start Time: </label><br/>
      <input id="start-time-selector" type="datetime-local" formControlName="startTime"/><br/>
      <label for="end-time-selector">End Time: </label><br/>
      <input id="end-time-selector" type="datetime-local" formControlName="endTime"/><br/>
      <button type="submit">Calculate</button>
      <p *ngIf="this.taxForm.errors?.['startTimeBeforeEndTime']">Start time must be before end time.</p>
    </form>
    <p>Current cost: {{ currentCost | currency: 'USD'}}</p>
  </div>
  `,
  styleUrl: './tax-form.component.css'
})
export class TaxFormComponent implements OnInit {
  @Input() selectedCity: City | undefined;

  taxForm: FormGroup = new FormGroup({});

  currentCost: number = 0.00;

  constructor(private taxService: TaxCalculatorService, @Inject(LOCALE_ID) private locale: string) { }

  ngOnInit(): void {
    let defaultDate: string = formatDate(new Date(), 'yyyy-MM-ddTHH:mm', this.locale);
    this.taxForm.addControl("startTime", new FormControl(defaultDate, [Validators.required]));
    this.taxForm.addControl("endTime", new FormControl(defaultDate, [Validators.required]));
    this.taxForm.addValidators(this.validateDate());
  }

  calculate() {
    if (this.selectedCity == null) return;
    if (this.taxForm.errors) return;
    this.taxService.calculate(
      this.selectedCity!.name,
      new Date(this.taxForm.value.startTime),
      new Date(this.taxForm.value.endTime)
    ).subscribe((resp) => {
      this.currentCost = resp.cost;
    })
  }

  validateDate(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const formGroup = group as FormGroup;
      const startTime = new Date(formGroup.get('startTime')?.value);
      const endTime = new Date(formGroup.get('endTime')?.value);
      console.log(startTime <= endTime);
      return startTime <= endTime ? null : { 'startTimeBeforeEndTime': true };
    };
  }
}
