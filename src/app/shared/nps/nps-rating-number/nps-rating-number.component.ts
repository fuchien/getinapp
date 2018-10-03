import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nps-rating-number',
  templateUrl: './nps-rating-number.component.html',
  styleUrls: ['./nps-rating-number.component.scss']
})
export class NpsRatingNumberComponent implements OnInit {

  @Input() ratingNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
