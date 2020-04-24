import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncomeFormComponent } from './new-income-form.component';

describe('NewIncomeFormComponent', () => {
  let component: NewIncomeFormComponent;
  let fixture: ComponentFixture<NewIncomeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIncomeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIncomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
