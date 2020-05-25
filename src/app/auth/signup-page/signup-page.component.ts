import { Component } from '@angular/core';
import { Constants } from '../../shared/constants';
import { NavigationService } from '../../services/navigation.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss', '../auth.component.scss'],
})
export class SignupPageComponent {
  linkButtonStyle = Constants.Button.Tertiary;
  registerUserData = {email: null, username: null, password: null};
  repeatPassword = null;
  errorText = null;

  constructor(public navigationService: NavigationService,
              private auth: AuthService) {}

  onLogoClick() {
    this.navigationService.navigateToLandingPage();
  }

  onLoginClick() {
    this.navigationService.navigateToLoginPage();
  }

  registerUser() {
    this.errorText = null;
    if (this.registerUserData.password !== this.repeatPassword) {
      this.errorText = 'Passwords must match';
      return;
    }
    this.auth.registerUser(this.registerUserData).subscribe(
      result => {
        localStorage.setItem('token', result.token);
        this.navigationService.navigateToQuiz();
      },
      err => {
        this.errorText = err.error.details ? err.error.details : err.error.title;
      }
    );
  }
}
