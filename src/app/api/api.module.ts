import { NgModule } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';


@NgModule({
  declarations: [QuizComponent],
  exports: [QuizComponent]
})
export class ApiModule { }
