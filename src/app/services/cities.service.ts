import { Injectable } from '@angular/core';
import { City } from '../model/city';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities: City[] = [];

  constructor() {
    this.cities = [
      { name: 'Test' },
      { name: 'Test2' }
    ]
  }

  getCities(): Observable<City[]> {
    return of(this.cities);
  }

}
