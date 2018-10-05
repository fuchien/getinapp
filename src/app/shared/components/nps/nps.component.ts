import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

// COMPONENTS
import { NpsDialogComponent } from './../../dialogs/nps-dialog/nps-dialog.component';

// INTERFACES
import { INpsRating } from './../../../interfaces/nps-rating/nps-rating.interface';
import { IResponse } from './../../../interfaces/http-response/http-response.interface';

// SERVICES
import { HttpService } from './../../services/http-service/http.service';
import { SnackbarService } from './../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss']
})
export class NpsComponent implements OnInit {

  public ratingNumbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  public ratingNumberSending: boolean = false;
  public ratingSent: boolean = false;

  constructor(
    private httpService: HttpService,
    private matDialog: MatDialog,
    private snackBar: SnackbarService
  ) { }

  ngOnInit() {
  }

  public ratingNumberSelected(ratingNumber: string): void {
    const body = {
      score: ratingNumber
    };
    this.ratingNumberSending = true;
    this.httpService.insert(body).subscribe(
      (response: IResponse) => {
        const id = response.data.id;
        this.ratingNumberSending = false;
        this.openDialog(ratingNumber, id);
      },
      (err: Error) => {
        this.ratingNumberSending = false;
        this.snackBar.openSnackBar('Erro ao mandar a nota!', 'Fechar');
      }
    )
  }

  public openDialog(ratingNumber: string, id: string): void {
    const dialogRef = this.matDialog.open(NpsDialogComponent, NpsDialogComponent.getDataConfig({ratingNumber, id}));
    dialogRef.afterClosed().subscribe(
      (nps: INpsRating) => this.ratingSent = true
    )
  }

}
