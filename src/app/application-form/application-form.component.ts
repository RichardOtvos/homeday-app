import {Component, OnInit} from '@angular/core';
import {PersonalDetails} from "../models/personal-details";
import {SalaryInfo} from "../models/salary-info";

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  FORM_PAGES = {
    PersonalData: 'personal-data-form',
    SalaryInfo: 'salary-info',
    Review: 'review-page'
  }

  FORM_ORDER: Array<string> = [
    this.FORM_PAGES.PersonalData,
    this.FORM_PAGES.SalaryInfo,
    this.FORM_PAGES.Review
  ]

  currentFormPage: string = this.FORM_PAGES.PersonalData;
  progressBarState: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  getProgressBarState() {
    const currentFormIndex = this.FORM_ORDER.indexOf(this.currentFormPage);
    return Math.floor(currentFormIndex / (this.FORM_ORDER.length - 1) * 100);
  }

  goToSalaryInfoForm() {
    this.currentFormPage = this.FORM_PAGES.SalaryInfo;
    this.progressBarState = this.getProgressBarState();
  }

  goToReviewPage() {
    this.currentFormPage = this.FORM_PAGES.Review;
    this.progressBarState = this.getProgressBarState();
  }

  goToPersonalDataForm() {
    this.currentFormPage = this.FORM_PAGES.PersonalData;
    this.progressBarState = this.getProgressBarState();
  }

  submitForm(formData: PersonalDetails & SalaryInfo){
    console.log('sent the following data', formData);
  }

}
