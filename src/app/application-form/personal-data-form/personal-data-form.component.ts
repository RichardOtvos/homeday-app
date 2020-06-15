import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormDataService} from "../../services/form-data.service";

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./../shared-form-styles.scss', './personal-data-form.component.scss']
})
export class PersonalDataFormComponent implements OnInit {

  @Output() onNext: EventEmitter<void> = new EventEmitter<void>();

  constructor(public formsData: FormDataService) {}

  ngOnInit(): void {
  }

  onClickNext(){
    this.onNext.emit();
  }

}
