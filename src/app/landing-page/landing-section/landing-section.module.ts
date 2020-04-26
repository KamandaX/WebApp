import { NgModule } from '@angular/core';
import { LandingSectionComponent } from './landing-section.component';
import { ButtonModule } from '../../shared/button/button.module';

@NgModule({
  declarations: [LandingSectionComponent],
  imports: [ButtonModule],
  exports: [LandingSectionComponent]
})
export class LandingSectionModule {}
