import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {
  constructor(private router: Router) {}

  navigateToLandingPage() {
    return this.router.navigate(['']);
  }

  navigateToQuiz() {
    return this.router.navigate(['quiz']);
  }

  navigateToLoginPage() {
    return this.router.navigate(['login']);
  }

  navigateToSignupPage() {
    return this.router.navigate(['signup']);
  }

  navigateToResetPassword() {
    return this.router.navigate(['reset-password']);
  }

  navigateToRecommendation() {
    return this.router.navigate(['recommendation']);
  }
}
