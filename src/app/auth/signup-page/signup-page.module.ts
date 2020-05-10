import { NgModule } from '@angular/core';
import { ButtonModule } from '../../shared/button/button.module';
import { SignupPageComponent } from './signup-page.component';
import { NavigationService } from '../../services/navigation.service';

@NgModule({
  declarations: [SignupPageComponent],
  providers: [NavigationService],
  exports: [SignupPageComponent],
  imports: [ButtonModule],
})
export class SignupPageModule {}
