import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// COMPONENTS
import { NpsComponent } from './components/nps/nps.component';
import { NpsDialogComponent } from './dialogs/nps-dialog/nps-dialog.component';
import { NpsRatingNumberComponent } from './components/nps/nps-rating-number/nps-rating-number.component';

// MODULES
import { AngularMaterialModule } from './../angular-material.module';

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    NpsComponent,
    NpsDialogComponent,
    NpsRatingNumberComponent,
  ],
  entryComponents: [
    NpsDialogComponent
  ],
  exports: [
    NpsComponent
  ]
})
export class SharedModule { }
