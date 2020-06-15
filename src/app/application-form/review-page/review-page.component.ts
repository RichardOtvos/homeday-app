import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormDataService} from "../../services/form-data.service";
import {PersonalDetails} from "../../models/personal-details";
import {SalaryInfo} from "../../models/salary-info";

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./../shared-form-styles.scss', './review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {

  @Output() onSubmit: EventEmitter<PersonalDetails & SalaryInfo> = new EventEmitter<PersonalDetails & SalaryInfo>();
  @Output() onBack: EventEmitter<void> = new EventEmitter<void>();

  constructor(public formsData: FormDataService) {}

  ngOnInit(): void {
  }

  onClickSubmit(){
    this.onSubmit.emit({...this.formsData.personalDetails, ...this.formsData.salaryInfo});
  }

  onClickBack(){
    this.onBack.emit();
  }



}
