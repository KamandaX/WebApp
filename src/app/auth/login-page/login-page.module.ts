import { ButtonModule } from './../../shared/button/button.module';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { NavigationService } from './../../services/navigation.service';

@NgModule({
  declarations: [LoginPageComponent],
  providers: [NavigationService],
  exports: [LoginPageComponent],
  imports: [ButtonModule],
})
export class LoginPageModule {}
