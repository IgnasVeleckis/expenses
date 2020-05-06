import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedLogComponent } from './combined-log.component';

describe('CombinedLogComponent', () => {
  let component: CombinedLogComponent;
  let fixture: ComponentFixture<CombinedLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
