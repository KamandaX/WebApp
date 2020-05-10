import { Type, Expose } from 'class-transformer';
import QuestionOption from './question-option/question-option.model';

export default class Question {
  title: string;

  @Type(() => QuestionOption)
  answers: QuestionOption[];
}
