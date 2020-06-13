import { TestBed } from '@angular/core/testing';

import { FormDataService } from './form-data.service';

describe('FormDataService', () => {
  let service: FormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a property holding the personal details form data', () => {
    expect('personalDetails' in  service).toBeTruthy();
  });

  it('should have a property holding the salary indication form data', () => {
    expect('salary' in  service).toBeTruthy();
  });

  it('should keep track of the number of form pages', () => {
    expect(service.totalFormPages).toBe(3);
  });

  it('should be able to reset the form fields', () => {

    service.personalDetails = {fullName: 'Joe Test', phoneNumber: '123-4567', email: 'joe@test.com'};
    service.salary = {salaryRange: '10000-15000'};

    service.resetData();

    expect(service.personalDetails.fullName).toBe('')
    expect(service.personalDetails.phoneNumber).toBe('')
    expect(service.personalDetails.email).toBe('')
    expect(service.salary.salaryRange).toBe('')
  });
});
