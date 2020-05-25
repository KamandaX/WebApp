import { Expose } from 'class-transformer';

export default class Camera {
  side: string;
  megapixels: number;

  @Expose({ name: 'f-number' })
  fNumber: number;
}
