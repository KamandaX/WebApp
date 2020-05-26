import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Recommendation from './recommendation.model';
import { RecommendationDataService } from './recommendation-data.service';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent implements OnInit {
  loading = false;
  recommendation: Recommendation = null;

  constructor(private recommendationDataService: RecommendationDataService,
              private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.recommendation = this.recommendationDataService.getRecommendation();
    if (!this.recommendation) {
        this.navigationService.navigateToQuiz();
    }
  }
}
