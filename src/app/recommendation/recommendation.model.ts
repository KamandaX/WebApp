import { Type, Expose } from 'class-transformer';
import Phone from './phone/phone.model';

export default class Recommendation {
  @Type(() => Phone)
  phones: Phone[] = [];
}
