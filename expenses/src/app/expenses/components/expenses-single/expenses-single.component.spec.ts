import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesSingleComponent } from './expenses-single.component';

describe('ExpensesSingleComponent', () => {
  let component: ExpensesSingleComponent;
  let fixture: ComponentFixture<ExpensesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
