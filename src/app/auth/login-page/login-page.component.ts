import { NavigationService } from './../../services/navigation.service';
import { Component } from '@angular/core';
import { Constants } from './../../shared/constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss', '../auth.component.scss'],
})
export class LoginPageComponent {
  linkButtonStyle = Constants.Button.Tertiary;

  constructor(public navigationService: NavigationService) {}

  onLogoClick() {
    this.navigationService.navigateToLandingPage();
  }

  onSignupClick(e) {
    e.preventDefault();
    this.navigationService.navigateToSignupPage();
  }

  onResetPassword(e) {
    e.preventDefault();
    this.navigationService.navigateToResetPassword();
  }
}
