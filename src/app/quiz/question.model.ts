import Anwser from './answer.model';
import { Type, Expose } from 'class-transformer';

export default class Question {
  title: string;

  @Type(() => Anwser)
  answers: Anwser[];
}
