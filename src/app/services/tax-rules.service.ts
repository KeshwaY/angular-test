import { Injectable } from '@angular/core';
import { TaxRule } from '../model/tax-rule';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxRulesService {

  taxRules: TaxRule[] = []

  constructor() {
    this.taxRules = [
      {
        city: "Test",
        startTime: "06:00",
        endTime: "06:29",
        price: 8.00
      },
      {
        city: "Test",
        startTime: "06:30",
        endTime: "06:59",
        price: 8.00
      },
      {
        city: "Test2",
        startTime: "07:00",
        endTime: "08:00",
        price: 10.00
      }
    ];
  }

  getTaxRules(): Observable<TaxRule[]> {
    return of(this.taxRules);
  }
}
