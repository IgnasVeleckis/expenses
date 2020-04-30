import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageDailyIncomeComponent } from './average-daily-income.component';

describe('AverageDailyIncomeComponent', () => {
  let component: AverageDailyIncomeComponent;
  let fixture: ComponentFixture<AverageDailyIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageDailyIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageDailyIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
