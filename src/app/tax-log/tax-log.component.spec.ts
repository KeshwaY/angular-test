import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxLogComponent } from './tax-log.component';

describe('TaxLogComponent', () => {
  let component: TaxLogComponent;
  let fixture: ComponentFixture<TaxLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxLogComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TaxLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
