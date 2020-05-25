import { Component } from '@angular/core';
import { Constants } from '../constants';
import { NavigationService } from './../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  signUpButtonStyle = Constants.Button.Secondary;

  constructor(public navigationService: NavigationService) {}

  onLogoClick() {
    this.navigationService.navigateToLandingPage();
  }

  onLoginClick() {
    this.navigationService.navigateToLoginPage();
  }

  onSignupClick() {
    this.navigationService.navigateToSignupPage();
  }
}
