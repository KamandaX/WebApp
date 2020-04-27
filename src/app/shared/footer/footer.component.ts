import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() getStartedSectionVisible = false;
  @Output() openQuiz: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
}
