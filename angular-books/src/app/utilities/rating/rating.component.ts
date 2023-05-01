import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {

constructor(){}

@Input()
maxRating = 5;

@Input()
SelectedRate = 0;

@Output()
onRating: EventEmitter<number> = new EventEmitter<number>();


previousRate = 0;
maxRatingArry : number[] = [] ; // MUA : Defining type is essential here otherwise it'll give compiler error, as cannot assign number to type 'never'

ngOnInit(): void {
  this.maxRatingArry = Array(this.maxRating).fill(0);
}

handleMouseEnter(index : number) {
  this.SelectedRate = index + 1;
}

handleMouseLeave() {
  if(this.previousRate !== 0)
  {
    this.SelectedRate = this.previousRate;
  }
  else {
    this.SelectedRate = 0;
  }
}

rate(index : number)
{
  this.SelectedRate = index + 1;
  this.previousRate = this.SelectedRate;
  this.onRating.emit(this.SelectedRate);
}

}
