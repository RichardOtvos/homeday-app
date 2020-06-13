import { Injectable } from '@angular/core';
import {PersonalDetails} from "../models/personal-details";
import {Salary} from "../models/salary";

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  public totalFormPages = 3

  public personalDetails: PersonalDetails;
  public salary: Salary;

  constructor() {
    this.resetData();
  }

  resetData(){
    this.personalDetails = {fullName: '', email: '', phoneNumber: ''};
    this.salary = {salaryRange: ''};
  }
}
