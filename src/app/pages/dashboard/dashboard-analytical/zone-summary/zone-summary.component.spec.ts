import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneSummaryComponent } from './zone-summary.component';

describe('ZoneSummaryComponent', () => {
  let component: ZoneSummaryComponent;
  let fixture: ComponentFixture<ZoneSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
