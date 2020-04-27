import { NgModule } from '@angular/core';
import { ReviewSectionComponent } from './review-section.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../../shared/button/button.module';

@NgModule({
  declarations: [ReviewSectionComponent],
  exports: [ReviewSectionComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class ReviewSectionModule {}
