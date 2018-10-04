import { Component, OnInit, Inject } from '@angular/core';
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

  constructor(
    public dialogRef: MatDialogRef<NpsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: IDialogData
  ) { }

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

}
