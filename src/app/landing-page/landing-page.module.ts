import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { LandingSectionModule } from './landing-section/landing-section.module';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { InfoSectionModule } from './info-section/info-section.module';
import { ReviewSectionModule } from './review-section/review-section.module';
import { NavigationService } from '../services/navigation.service';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    LandingSectionModule,
    HeaderModule,
    InfoSectionModule,
    FooterModule,
    ReviewSectionModule,
  ],
  providers: [
    NavigationService
  ],
  exports: [LandingPageComponent],
})
export class LandingPageModule {}
