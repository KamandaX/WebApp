import { LoginPageModule } from './auth/login-page/login-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { QuizModule } from './quiz/quiz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LandingPageModule,
    AppRoutingModule,
    HttpClientModule,
    QuizModule,
    LoginPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
