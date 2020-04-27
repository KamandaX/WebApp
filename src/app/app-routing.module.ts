import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  {path: '', component : LandingPageComponent},
  {path: 'phone', component : PhoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
