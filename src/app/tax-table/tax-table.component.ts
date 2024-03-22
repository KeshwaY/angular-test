import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaxRule } from '../model/tax-rule';

@Component({
  selector: 'app-tax-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>Tax Rules</h2>
      <table border="1">
        <tr>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Cost per hour</th>
        </tr>
        <tr *ngFor="let taxRule of taxRules">
          <td>{{ taxRule.startTime }}</td>
          <td>{{ taxRule.endTime }}</td>
          <td>{{ taxRule.price | currency: 'USD'}}</td>
        </tr>
      </table>
    </div>
  `,
  styleUrl: './tax-table.component.css'
})
export class TaxTableComponent {
  @Input() taxRules: TaxRule[] = [];
}
