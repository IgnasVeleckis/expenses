import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestExpenseComponent } from './highest-expense.component';

describe('HighestExpenseComponent', () => {
  let component: HighestExpenseComponent;
  let fixture: ComponentFixture<HighestExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighestExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
