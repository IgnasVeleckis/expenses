import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLogComponent } from './all-log.component';

describe('AllLogComponent', () => {
  let component: AllLogComponent;
  let fixture: ComponentFixture<AllLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
