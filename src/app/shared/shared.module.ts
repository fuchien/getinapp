import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NpsComponent } from './nps/nps.component';
import { NpsRatingNumberComponent } from './nps/nps-rating-number/nps-rating-number.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NpsComponent,
    NpsRatingNumberComponent
  ],
  exports: [
    NpsComponent
  ]
})
export class SharedModule { }
