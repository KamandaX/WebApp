import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Constants } from '../constants';
import { SignedInModel } from '../../auth/signed-in.model';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public navigationService: NavigationService) {}

  signUpButtonStyle = Constants.Button.Secondary;
  editProfileStyle = Constants.Button.Primary;
  signOutStyle = Constants.Button.Secondary;
  signedInUser: SignedInModel =
    // new SignedInModel();
    {username: 'test', userId: '1'};

  openLoginPage() {
    this.navigationService.navigateToLoginPage();
  }

  openSignupPage() {
    this.navigationService.navigateToSignupPage();
  }

  openEditProfilePage() {}
  signOut() {}
}
