import { Expose } from 'class-transformer';

export default class QuestionOption {
  answer: string;

  @Expose({ name: 'img_url' })
  imageUrl: string;

  @Expose({ name: 'next_question_id' })
  nextQuestionID: number;

  multiplier: number;
}
