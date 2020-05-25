import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavigationService } from '../services/navigation.service';

const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Api-Request': 'true',
    Accept: 'application/json'
});

@Injectable()
export class AuthService {
    private registerUrl = 'http://localhost:5000/api/v1/users/signup';
    private loginUrl = 'http://localhost:5000/api/v1/users/login';

    constructor(private http: HttpClient,
                private navigationService: NavigationService) {
    }

    registerUser(user) {
        return this.http.post<any>(this.registerUrl, user, {headers});
    }

    loginUser(user) {
        return this.http.post<any>(this.loginUrl, user, {headers});
    }

    logoutUser() {
        localStorage.removeItem('token');
        this.navigationService.navigateToLandingPage();
    }

    getToken() {
        return localStorage.getItem('token');
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }
}
