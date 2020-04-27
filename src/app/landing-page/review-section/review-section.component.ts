import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReviewModel } from './review.model';
import { Constants } from '../../shared/constants';

@Component({
  selector: 'app-review-section',
  templateUrl: './review-section.component.html',
  styleUrls: ['./review-section.component.scss'],
})
export class ReviewSectionComponent{

  @Input() reviewsData: ReviewModel[];
  @Output() showMoreReviews: EventEmitter<any>;

  buttonStyle = Constants.Button.Tertiary;
}
