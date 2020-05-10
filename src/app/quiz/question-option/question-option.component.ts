import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import QuestionOption from './question-option.model';

@Component({
  selector: 'app-question-option',
  templateUrl: './question-option.component.html',
  styleUrls: ['./question-option.component.scss']
})
export class QuestionOptionComponent {

  constructor() { }
  @Input() option: QuestionOption = new QuestionOption();
  @Output() optionClicked: EventEmitter<any> = new EventEmitter<any>();
}
