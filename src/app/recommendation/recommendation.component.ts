import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Recommendation from './recommendation.model';
import { plainToClass } from 'class-transformer';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./recommendation.component.scss'],
})
export class RecommendationComponent implements OnInit {
  loading = false;
  recommendation: Recommendation;

  ngOnInit(): void {
    this.recommendation = plainToClass(Recommendation, {
      phones: [
        {
          manufacturer: 'Samsung',
          model_name: 'Galaxy A51',
          display_resoliution_horizontal: 1080,
          display_resoliution_vertical: 2400,
          price: 280.0,
          launch_date: '2019 December 16',
          screen_size: 6.5,
          protection_rating: 0,
          processor: 'Exynos 9611 (10nm)',
          storage: 128,
          ram: 8,
          battery_size: 4000,
          image_url: '/assets/app-logo.svg',
          cameras: [
            {
              side: 'Main',
              megapixels: 40,
              'f-number': 1.8,
            },
            {
              side: 'Selfie',
              megapixels: 40,
              'f-number': 1.8,
            },
          ],
        },
        {
          manufacturer: 'Samsung',
          model_name: 'Galaxy A51',
          display_resoliution_horizontal: 1080,
          display_resoliution_vertical: 2400,
          price: 280.0,
          launch_date: '2019 December 16',
          screen_size: 6.5,
          protection_rating: 0,
          processor: 'Exynos 9611 (10nm)',
          storage: 128,
          ram: 8,
          battery_size: 4000,
          image_url: '/assets/app-logo.svg',
          cameras: [
            {
              side: 'Main',
              megapixels: 40,
              'f-number': 1.8,
            },
            {
              side: 'Selfie',
              megapixels: 40,
              'f-number': 1.8,
            },
          ],
        },
        {
          manufacturer: 'Samsung',
          model_name: 'Galaxy A51',
          display_resoliution_horizontal: 1080,
          display_resoliution_vertical: 2400,
          price: 280.0,
          launch_date: '2019 December 16',
          screen_size: 6.5,
          protection_rating: 0,
          processor: 'Exynos 9611 (10nm)',
          storage: 128,
          ram: 8,
          battery_size: 4000,
          image_url: '/assets/app-logo.svg',
          cameras: [
            {
              side: 'Main',
              megapixels: 40,
              'f-number': 1.8,
            },
            {
              side: 'Selfie',
              megapixels: 40,
              'f-number': 1.8,
            },
          ],
        },
      ],
    });
  }
}

/*
{
          manufacturer: 'Samsung',
          model_name: 'Galaxy A51',
          display_resoliution: 'Resolution 1080 x 2400 pixels',
          price: '280.00€',
          launch_date: '2019 December 16',
          screen_size: 'Size 6.5 inches',
          protection_rating: '',
          processor: 'Exynos 9611 (10nm)',
          storage: '64 - 128GB',
          ram: '4 - 8GB RAM',
          battery_size: '4000mAh',
        },
*/
