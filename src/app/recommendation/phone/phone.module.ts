import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhoneComponent } from './phone.component';

@NgModule({
  declarations: [PhoneComponent],
  imports: [CommonModule],
  exports: [PhoneComponent],
})
export class PhoneModule {}
