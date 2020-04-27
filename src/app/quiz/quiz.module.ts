import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule],
  exports: [QuizComponent],
})
export class QuizModule {}
