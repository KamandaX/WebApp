import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ButtonModule, CommonModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {}
