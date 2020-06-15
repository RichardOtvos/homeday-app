import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryInfoFormComponent } from './salary-info-form.component';

describe('SalaryInfoFormComponent', () => {
  let component: SalaryInfoFormComponent;
  let fixture: ComponentFixture<SalaryInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
