import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss'],
})
export class LandingSectionComponent {

  @Output() openApp: EventEmitter<any> = new EventEmitter<any>();
}
