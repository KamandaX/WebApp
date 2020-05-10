import { Component, OnInit } from '@angular/core';
import { ReviewModel } from './review-section/review.model';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(public navigationService: NavigationService) {}

  data: ReviewModel[];

  ngOnInit() {
    this.setMockData();
  }

  private setMockData() {
    this.data = [
      {
        profileImageLink: '/assets/profilePictures/human-portrait.svg',
        userName: 'John Smith',
        rating: 5,
        reviewText:
          'This is an awesome app! Never thought a Samsung would suit my needs so well!',
      },
      {
        profileImageLink: '/assets/profilePictures/human-portrait.svg',
        userName: 'John Smith',
        rating: 4,
        reviewText:
          'This is an awesome app! Never thought a Samsung would suit my needs so well!',
      },
      {
        profileImageLink: '/assets/profilePictures/human-portrait.svg',
        userName: 'John Smith',
        rating: 5,
        reviewText:
          'This is an awesome app! Never thought a Samsung would suit my needs so well!',
      },
    ];
  }

  onOpenApp() {
    this.navigationService.navigateToQuiz();
  }

  onLoginClick() {
    this.navigationService.navigateToLoginPage();
  }
}
