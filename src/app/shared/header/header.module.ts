import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ButtonModule } from '../button/button.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ButtonModule, CommonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
