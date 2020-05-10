import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { QuizModule } from './quiz/quiz.module';
import { LoginPageModule } from './auth/login-page/login-page.module';
import { SignupPageModule } from './auth/signup-page/signup-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LandingPageModule,
    AppRoutingModule,
    HttpClientModule,
    QuizModule,
    LoginPageModule,
    SignupPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
