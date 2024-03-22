import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaxRule } from '../model/tax-rule';
import { CommonModule } from '@angular/common';
import { City } from '../model/city';
import { TaxTableComponent } from '../tax-table/tax-table.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, TaxTableComponent],
  template: `
    <div>
      <h2>City</h2>
      <select #citySelect (change)="selectTaxRules(citySelect.value)">
        <option *ngFor="let city of cities"> {{ city.name }}</option>
      </select>
      <app-tax-table [taxRules]="selectedRules"></app-tax-table>
    </div>
  `,
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  @Input({ required: true }) cities: City[] = [];
  @Input({ required: true }) taxRules: TaxRule[] = [];
  @Output() citySelectionEvent: EventEmitter<String> = new EventEmitter<String>();

  selectedRules: TaxRule[] = [];

  ngOnInit(): void {
    this.selectTaxRules(this.cities.at(0)?.name);
  }

  selectTaxRules(cityName: string = ''): void {
    this.selectedRules = this.taxRules.filter((r) => r.city == cityName);
    this.citySelectionEvent.emit(cityName)
  }
}

