import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { LandingSectionModule } from './landing-section/landing-section.module';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [LandingSectionModule, HeaderModule],
  exports: [LandingPageComponent]
})
export class LandingPageModule {}
