import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { LandingSectionModule } from './landing-section/landing-section.module';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [LandingSectionModule, HeaderModule, FooterModule],
  exports: [LandingPageComponent]
})
export class LandingPageModule {}
