import { ButtonModule } from './../../shared/button/button.module';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { NavigationService } from './../../services/navigation.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@NgModule({
  declarations: [LoginPageComponent],
  providers: [NavigationService, AuthService],
  exports: [LoginPageComponent],
    imports: [ButtonModule, FormsModule],
})
export class LoginPageModule {}
