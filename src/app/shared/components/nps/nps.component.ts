import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

// COMPONENTS
import { NpsDialogComponent } from './../../dialogs/nps-dialog/nps-dialog.component';

@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss']
})
export class NpsComponent implements OnInit {

  public ratingNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
  }

  public ratingNumberSelected(ratingNumber: number): void {
    this.openDialog(ratingNumber);
  }

  public openDialog(ratingNumber: number): void {
    const dialogRef = this.matDialog.open(NpsDialogComponent, NpsDialogComponent.getDataConfig(ratingNumber));
  }

}
