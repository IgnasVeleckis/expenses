import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogNavigationComponent } from './log-navigation.component';

describe('LogNavigationComponent', () => {
  let component: LogNavigationComponent;
  let fixture: ComponentFixture<LogNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
