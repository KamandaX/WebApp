import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Recommendation from './recommendation.model';
import { RecommendationDataService } from './recommendation-data.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent implements OnInit {
  loading = false;
  recommendation: Recommendation = new Recommendation();

  constructor(private recommendationDataService: RecommendationDataService) {
  }

  ngOnInit(): void {
    this.recommendation = this.recommendationDataService.getRecommendation();
  }
}
