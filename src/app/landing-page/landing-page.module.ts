import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { LandingSectionModule } from './landing-section/landing-section.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [LandingSectionModule],
  exports: [LandingPageComponent]
})
export class LandingPageModule {}
