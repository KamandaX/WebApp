import { Component, Output, EventEmitter } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  signUpButtonStyle = Constants.Button.Secondary;
  @Output() openLoginPage: EventEmitter<any> = new EventEmitter<any>();
}
