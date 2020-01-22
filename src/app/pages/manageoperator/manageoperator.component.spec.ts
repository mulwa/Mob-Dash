import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageoperatorComponent } from './manageoperator.component';

describe('ManageoperatorComponent', () => {
  let component: ManageoperatorComponent;
  let fixture: ComponentFixture<ManageoperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageoperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
