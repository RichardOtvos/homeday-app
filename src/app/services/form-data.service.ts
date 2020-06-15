import { Injectable } from '@angular/core';
import {PersonalDetails} from "../models/personal-details";
import {SalaryInfo} from "../models/salary-info";

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  public totalFormPages = 3

  public personalDetails: PersonalDetails;
  public salaryInfo: SalaryInfo;

  constructor() {
    this.resetData();
  }

  resetData(){
    this.personalDetails = {fullName: '', email: '', phoneNumber: ''};
    this.salaryInfo = {salaryRange: '', currentWorkplaceName: '', doesHaveDebt: false};
  }
}
