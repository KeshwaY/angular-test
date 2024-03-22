import { TestBed } from '@angular/core/testing';

import { TaxRulesService } from './tax-rules.service';

describe('TaxRulesService', () => {
  let service: TaxRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
