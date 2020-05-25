import { Component, Input } from '@angular/core';
import Phone from './phone.model';
import Camera from './camera.model';
import Side from './camera-side.enum';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent {
  @Input() phoneNumber: number;
  @Input() phone: Phone;

  public getFormattedLaunchDate() {
    if (this.phone == null) {
      return '';
    }

    const date = new Date(this.phone.launchDate);
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0];
  }

  public getMainCamera() {
    return this.getCamera(Side.Main);
  }

  public getSelfieCamera() {
    return this.getCamera(Side.Selfie);
  }

  private getCamera(side: Side): Camera | null {
    if (
      this.phone == null ||
      this.phone.cameras == null ||
      this.phone.cameras.length === 0
    ) {
      return null;
    }

    return this.phone.cameras.find((camera) => camera.side === side);
  }
}
