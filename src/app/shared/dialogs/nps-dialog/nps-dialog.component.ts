import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';

export interface IDialogData {
  ratingNumber: number;
}

@Component({
  selector: 'app-nps-dialog',
  templateUrl: './nps-dialog.component.html',
  styleUrls: ['./nps-dialog.component.scss']
})
export class NpsDialogComponent implements OnInit {

  public npsForm: FormGroup;
  public ratingSent: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<NpsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: IDialogData,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  public static getDataConfig(ratingNumber: number): MatDialogConfig {
    const options = new MatDialogConfig();
    options.autoFocus = true;
    options.disableClose = true;
    options.width = '543px';
    options.data = {
      ratingNumber
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
    this.ratingSent = true;
  }

  public closeDialog(): void {
    this.dialogRef.close(this.npsForm.value);
  }

}
