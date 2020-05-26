import { Expose } from 'class-transformer';

export default class Camera {
    side: number;
    megapixels: number;

    @Expose({ name: 'f-number' })
    fNumber: number;
}
