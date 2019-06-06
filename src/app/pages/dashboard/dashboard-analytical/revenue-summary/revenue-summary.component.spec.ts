import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueSummaryComponent } from './revenue-summary.component';

describe('RevenueSummaryComponent', () => {
  let component: RevenueSummaryComponent;
  let fixture: ComponentFixture<RevenueSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
