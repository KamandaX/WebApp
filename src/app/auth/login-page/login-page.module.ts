import { ButtonModule } from './../../shared/button/button.module';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { NavigationService } from './../../services/navigation.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginPageComponent],
  providers: [NavigationService, AuthService],
  exports: [LoginPageComponent],
    imports: [ButtonModule, FormsModule, CommonModule],
})
export class LoginPageModule {}
