import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

// INTERFACES
import { IResponse } from './../../../interfaces/http-response/http-response.interface';

// SERVICES
import { HttpService } from './../../services/http-service/http.service';
import { SnackbarService } from './../../services/snackbar/snackbar.service';

export interface IDialogData {
  id: string;
  ratingNumber: string;
}

@Component({
  selector: 'app-nps-dialog',
  templateUrl: './nps-dialog.component.html',
  styleUrls: ['./nps-dialog.component.scss']
})
export class NpsDialogComponent implements OnInit {

  public npsForm: FormGroup;
  public ratingSending: boolean = false;
  public ratingSent: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<NpsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: IDialogData,
    private fb: FormBuilder,
    private httpService: HttpService,
    private snackBar: SnackbarService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  public static getDataConfig(obj: {ratingNumber: string, id: string}): MatDialogConfig {
    const options = new MatDialogConfig();
    options.autoFocus = true;
    options.disableClose = true;
    options.width = '543px';
    options.data = {
      ratingNumber: obj.ratingNumber,
      id: obj.id
    }
    return options;
  }

  public createForm(): void {
    this.npsForm = this.fb.group({
      ratingComment: ['', [Validators.required]],
      ratingNumber: [this.dialogData.ratingNumber]
    });
  }

  public sendComment(): void {
    if (!this.npsForm.valid) {
      return;
    }
    const body = {
      comment: this.npsForm.get('ratingComment').value,
      id: this.dialogData.id
    };
    this.ratingSending = true;
    this.httpService.insert(body).subscribe(
      (response: IResponse) => {
        this.ratingSent = true;
        this.ratingSending = false;
      },
      (err: Error) => {
        this.ratingSending = false;
        this.snackBar.openSnackBar('Erro ao mandar o comentário!', 'Fechar');
      }
    )
  }

  public closeDialog(): void {
    this.dialogRef.close(this.npsForm.value);
  }

}
