import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent implements OnInit {

  @Output() onNext: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickNext(){
    this.onNext.emit();
  }

}
