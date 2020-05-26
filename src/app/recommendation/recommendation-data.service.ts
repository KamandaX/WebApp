import { Injectable } from '@angular/core';
import Recommendation from './recommendation.model';

@Injectable({
    providedIn: 'root',
})
export class RecommendationDataService {
    recommendation: Recommendation = null;

    setRecommendation(data) {
        this.recommendation = data;
        console.log(this.recommendation);
    }

    getRecommendation() {
        console.log(this.recommendation);
        return this.recommendation;
    }
}
