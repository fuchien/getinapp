import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss']
})
export class NpsComponent implements OnInit {

  public ratingNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit() {
  }

  public ratingNumberSelected(ratingNumber: number): void {
    console.log(ratingNumber)
  }

}
