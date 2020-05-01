import { Expose } from 'class-transformer';

export default class Anwser {
  answer: string;

  @Expose({ name: 'img_url' })
  imageUrl: string;

  @Expose({ name: 'next_question_id' })
  nextQuestionID: number;
}
