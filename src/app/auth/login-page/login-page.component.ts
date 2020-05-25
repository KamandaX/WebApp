import { NavigationService } from './../../services/navigation.service';
import { Component } from '@angular/core';
import { Constants } from './../../shared/constants';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss', '../auth.component.scss'],
})
export class LoginPageComponent {
  loginUserData = {email: null, password: null};
  linkButtonStyle = Constants.Button.Tertiary;

  constructor(public navigationService: NavigationService,
              private auth: AuthService) {}

  onLogoClick() {
    this.navigationService.navigateToLandingPage();
  }

  onSignupClick(e) {
    e.preventDefault();
    this.navigationService.navigateToSignupPage();
  }

  onLoginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      result => {
        localStorage.setItem('token', result.token);
        this.navigationService.navigateToQuiz();
      },
      err => console.log(err)
    );
  }
}
