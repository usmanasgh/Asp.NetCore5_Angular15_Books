import { Input, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilities/rating/rating.component';
import { TypeofExpr } from '@angular/compiler';

@Component({
  selector: 'app-life-cycle-test',
  templateUrl: './life-cycle-test.component.html',
  styleUrls: ['./life-cycle-test.component.css']
})
export class LifeCycleTestComponent implements OnInit, OnChanges, OnDestroy, DoCheck,AfterViewInit {

  // MUA : Add a parameter
  @Input()
  title : string;

  @ViewChild(RatingComponent)
  rating : RatingComponent

 timer : ReturnType<typeof setInterval>;
  
  // It is not life cycle event
  constructor(){}


  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    console.log(changes);
    //throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    console.log('on docheck');
    //throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    console.log('on Destroy');
    clearInterval(this.timer);
    //throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    console.log('on AfterViewInit');
    console.log(this.rating);
    // throw new Error('Method not implemented.');
  }

ngOnInit(): void {
  console.log('on init');
  console.log(this.rating);
  this.timer = setInterval(()=> console.log(new Date(), 1000));
}

}
