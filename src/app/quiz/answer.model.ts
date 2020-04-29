import { Expose } from 'class-transformer';

export default class Anwser {
  answer: string;

  @Expose({ name: 'img_url' })
  imageUrl: string;
}
