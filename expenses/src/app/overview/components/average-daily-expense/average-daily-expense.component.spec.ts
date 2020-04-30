import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageDailyExpenseComponent } from './average-daily-expense.component';

describe('AverageDailyExpenseComponent', () => {
  let component: AverageDailyExpenseComponent;
  let fixture: ComponentFixture<AverageDailyExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageDailyExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageDailyExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
