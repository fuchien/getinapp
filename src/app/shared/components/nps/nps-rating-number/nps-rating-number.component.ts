import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nps-rating-number',
  templateUrl: './nps-rating-number.component.html',
  styleUrls: ['./nps-rating-number.component.scss']
})
export class NpsRatingNumberComponent implements OnInit {

  @Input() ratingNumber: string;
  @Output() ratingNumberSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(
  ) { }

  ngOnInit() {
  }

  public emitRatingNumberSelected(ratingNumber: string): void {
    this.ratingNumberSelected.emit(ratingNumber);
  }

}
