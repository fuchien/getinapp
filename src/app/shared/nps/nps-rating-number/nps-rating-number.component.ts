import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nps-rating-number',
  templateUrl: './nps-rating-number.component.html',
  styleUrls: ['./nps-rating-number.component.scss']
})
export class NpsRatingNumberComponent implements OnInit {

  @Input() ratingNumber: number;
  @Output() ratingNumberSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public emitRatingNumberSelected(ratingNumber: number): void {
    this.ratingNumberSelected.emit(ratingNumber);
  }

}
