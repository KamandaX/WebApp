import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Constants } from '../constants';
import { SignedInModel } from '../../auth/signed-in.model';
import { NavigationService } from '../../services/navigation.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private navigationService: NavigationService,
              private authService: AuthService) {}

  signUpButtonStyle = Constants.Button.Secondary;
  editProfileStyle = Constants.Button.Primary;
  signOutStyle = Constants.Button.Secondary;
  signedInUser: boolean = this.authService.loggedIn();

  openLoginPage() {
    this.navigationService.navigateToLoginPage();
  }

  openSignupPage() {
    this.navigationService.navigateToSignupPage();
  }

  openEditProfilePage() {}

  signOut() {
    this.authService.logoutUser();
  }
}
