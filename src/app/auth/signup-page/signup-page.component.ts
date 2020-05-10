import { Component } from '@angular/core';
import { Constants } from './../../shared/constants';
import { NavigationService } from './../../services/navigation.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss', '../auth.component.scss'],
})
export class SignupPageComponent {
  linkButtonStyle = Constants.Button.Tertiary;

  constructor(public navigationService: NavigationService) {}

  onLogoClick() {
    this.navigationService.navigateToLandingPage();
  }

  onLoginClick() {
    this.navigationService.navigateToLoginPage();
  }
}
