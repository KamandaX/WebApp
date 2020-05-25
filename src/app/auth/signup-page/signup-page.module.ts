import { NgModule } from '@angular/core';
import { ButtonModule } from '../../shared/button/button.module';
import { SignupPageComponent } from './signup-page.component';
import { NavigationService } from '../../services/navigation.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@NgModule({
  declarations: [SignupPageComponent],
  providers: [NavigationService, AuthService],
  exports: [SignupPageComponent],
  imports: [ButtonModule, FormsModule],
})
export class SignupPageModule {}
