import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavigationComponent } from './landing-navigation.component';

describe('LandingNavigationComponent', () => {
  let component: LandingNavigationComponent;
  let fixture: ComponentFixture<LandingNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
