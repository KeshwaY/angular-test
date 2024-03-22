import { Component, OnInit } from '@angular/core';
import { TaxCalculatorService } from '../services/tax-calculator.service';
import { TaxRequestLog } from '../model/tax-request-log';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tax-log',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>Logs</h2>
      <p *ngFor="let log of logs"> 
        city: {{ log.city | uppercase }} 
        <br/>
        cost: {{ log.cost | currency: 'USD'}}
        <br/>
        {{ log.startTime.toLocaleDateString() }} from {{ log.startTime.toLocaleTimeString() }} <br/>
        {{ log.endTime.toLocaleDateString() }} to {{ log.endTime.toLocaleTimeString() }} 
      </p>
    </div>
  `,
  styleUrl: './tax-log.component.css'
})
export class TaxLogComponent implements OnInit {

  logs: TaxRequestLog[] = [];

  constructor(private taxCalculator: TaxCalculatorService) { }

  ngOnInit(): void {
    this.logs = this.taxCalculator.getAllLogs();
  }
}
