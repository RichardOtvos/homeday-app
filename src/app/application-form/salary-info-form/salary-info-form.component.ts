import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormDataService} from "../../services/form-data.service";

@Component({
  selector: 'app-salary-info-form',
  templateUrl: './salary-info-form.component.html',
  styleUrls: ['./../shared-form-styles.scss', './salary-info-form.component.scss']
})
export class SalaryInfoFormComponent implements OnInit {

  @Output() onNext: EventEmitter<void> = new EventEmitter<void>();
  @Output() onBack: EventEmitter<void> = new EventEmitter<void>();

  constructor(public formsData: FormDataService) { }

  ngOnInit(): void {
  }

  onClickNext(){
    this.onNext.emit();
  }

  onClickBack(){
    this.onBack.emit();
  }

}
