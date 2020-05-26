import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';
import { NavigationService } from '../../services/navigation.service';
import { AuthService } from '../../auth/auth.service';
import jwtDecode from 'jwt-decode';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
    constructor(private navigationService: NavigationService,
                private authService: AuthService) {
    }

    signUpButtonStyle = Constants.Button.Secondary;
    editProfileStyle = Constants.Button.Primary;
    signOutStyle = Constants.Button.Secondary;
    signedInUser: boolean = this.authService.loggedIn();
    username = null;

    ngOnInit() {
        if (this.authService.loggedIn()) {
            this.username = jwtDecode(this.authService.getToken()).unique_name;
        }
    }

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
