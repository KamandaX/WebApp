import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz.component';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { QuestionOptionModule } from './question-option/question-option.module';
import { RecommendationDataService } from '../recommendation/recommendation-data.service';

@NgModule({
  declarations: [QuizComponent],
  imports: [CommonModule, HeaderModule, FooterModule, QuestionOptionModule],
  providers: [RecommendationDataService],
  exports: [QuizComponent],
})
export class QuizModule {}
