import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Constants } from '../constants';
import { SignedInModel } from '../../auth/signed-in.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  signUpButtonStyle = Constants.Button.Secondary;
  editProfileStyle = Constants.Button.Primary;
  signOutStyle = Constants.Button.Secondary;
  @Input() signedInUser: SignedInModel =// new SignedInModel();
    {username: 'test', userId: '1'};
  @Output() openLoginPage: EventEmitter<any> = new EventEmitter<any>();
  @Output() openSignupPage: EventEmitter<any> = new EventEmitter<any>();

  openEditProfilePage() {}
  signOut() {}
}
