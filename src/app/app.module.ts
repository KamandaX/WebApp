import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LandingPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
