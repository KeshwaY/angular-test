import { Component } from '@angular/core';
import { City } from '../model/city';
import { TaxRule } from '../model/tax-rule';
import { CitiesService } from '../services/cities.service';
import { TaxRulesService } from '../services/tax-rules.service';
import { OverviewComponent } from '../overview/overview.component';
import { TaxFormComponent } from '../tax-form/tax-form.component';
import { TaxLogComponent } from '../tax-log/tax-log.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [OverviewComponent, TaxFormComponent, TaxLogComponent],
  template: `
  <div>
    <app-overview [cities]="cities" [taxRules]="taxRules" (citySelectionEvent)="selectCity($event)"></app-overview>
    <app-tax-form [selectedCity]="selectedCity"></app-tax-form>
    <app-tax-log></app-tax-log>
  </div>
  `,
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  cities: City[] = [];
  taxRules: TaxRule[] = [];

  selectedCity: City | undefined;

  constructor(private cityService: CitiesService, private taxRulesService: TaxRulesService) { }

  ngOnInit(): void {
    this.cityService.getCities().subscribe((cities) => this.cities = cities);
    this.taxRulesService.getTaxRules().subscribe((rules) => this.taxRules = rules);
  }

  selectCity(city: String) {
    this.selectedCity = this.cities.find((c) => c.name === city);
  }
}
