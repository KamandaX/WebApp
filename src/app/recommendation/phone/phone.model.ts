import { Expose, Type } from 'class-transformer';
import Camera from './camera.model';

export default class Phone {
  manufacturer: string;

  @Expose({ name: 'model_name' })
  model: string;

  @Expose({ name: 'display_resolution_horizontal' })
  displayResoliutionHorizontal: string;

  @Expose({ name: 'display_resolution_vertical' })
  displayResoliutionVertical: string;

  price: number;

  @Expose({ name: 'launch_date' })
  launchDate: string;

  @Expose({ name: 'screen_size' })
  screenSize: number;

  @Expose({ name: 'protection_rating' })
  protectionRating: number;

  processor: string;

  storage: string;

  ram: number;

  @Expose({ name: 'battery_size' })
  batterySize: number;

  @Type(() => Camera)
  cameras: Camera[];

  @Expose({ name: 'image_url' })
  imageUrl: string;
}
