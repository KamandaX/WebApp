import { Component } from '@angular/core';
import { Constants } from '../constants';
import { NavigationService } from '../../services/navigation.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private navigationService: NavigationService,
                private authService: AuthService) {
    }

    signUpButtonStyle = Constants.Button.Secondary;
    editProfileStyle = Constants.Button.Primary;
    signOutStyle = Constants.Button.Secondary;
    signedInUser: boolean = this.authService.loggedIn();

    onLoginClick() {
        this.navigationService.navigateToLoginPage();
    }

    onSignupClick() {
        this.navigationService.navigateToSignupPage();
    }

    onLogoClick() {
        this.navigationService.navigateToLandingPage();
    }

    openEditProfilePage() {
    }

    signOut() {
        this.authService.logoutUser();
    }
}
