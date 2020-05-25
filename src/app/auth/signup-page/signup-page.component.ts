import { Component } from '@angular/core';
import { Constants } from './../../shared/constants';
import { NavigationService } from './../../services/navigation.service';
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

  constructor(public navigationService: NavigationService,
              private auth: AuthService) {}

  onLogoClick() {
    this.navigationService.navigateToLandingPage();
  }

  onLoginClick() {
    this.navigationService.navigateToLoginPage();
  }

  registerUser() {
    if (this.registerUserData.password === this.repeatPassword) {
      this.auth.registerUser(this.registerUserData).subscribe(
        result => {
          localStorage.setItem('token', result.token);
          this.navigationService.navigateToQuiz();
        },
        err => console.log(err)
      );
    }
  }
}
