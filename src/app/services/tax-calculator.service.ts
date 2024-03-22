import { Injectable } from '@angular/core';
import { TaxRequestLog } from '../model/tax-request-log';
import { TaxResponse } from '../model/tax-response';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaxCalculatorService {
  logs: TaxRequestLog[] = [];

  constructor() { }

  calculate(city: string, startTime: Date, endTime: Date): Observable<TaxResponse> {
    let response: Observable<TaxResponse> = of(
      { cost: 2.00 }
    );
    return response.pipe(
      tap((r) => 
        this.logs.push({ city: city, startTime: startTime, endTime: endTime, cost: r.cost })
      ),
      catchError((err: Error) => {
        alert(`${err.message}`)
        return of({} as TaxResponse)
      })
    );
  }

  getAllLogs(): TaxRequestLog[] {
    return this.logs;
  }
}
