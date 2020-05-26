import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { RecommendationComponent } from './recommendation.component';
import { PhoneModule } from './phone/phone.module';
import { RecommendationDataService } from './recommendation-data.service';

@NgModule({
  declarations: [RecommendationComponent],
  imports: [CommonModule, HeaderModule, FooterModule, PhoneModule],
  providers: [RecommendationDataService],
  exports: [RecommendationComponent],
})
export class RecommendationModule {}
