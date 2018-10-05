import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// COMPONENTS
import { NpsComponent } from './components/nps/nps.component';
import { NpsDialogComponent } from './dialogs/nps-dialog/nps-dialog.component';
import { NpsRatingNumberComponent } from './components/nps/nps-rating-number/nps-rating-number.component';

// MODULES
import { AngularMaterialModule } from './../angular-material.module';

// SERVICES
import { HttpService } from './services/http-service/http.service';
import { SnackbarService } from './services/snackbar/snackbar.service';

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    HttpClientModule,
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
  ],
  providers: [
    HttpService,
    SnackbarService
  ]
})
export class SharedModule { }
