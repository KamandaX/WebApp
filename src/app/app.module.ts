import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingSectionComponent } from './landing-page/landing-section/landing-section.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, LandingSectionComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
