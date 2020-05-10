import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonStyle: string;
  @Input() isBig: boolean;
  @Input() isLink: boolean;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  secondStyle = Constants.Button.Secondary;
  tertiaryStyle = Constants.Button.Tertiary;
}
