import { AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-test',
  templateUrl: './life-cycle-test.component.html',
  styleUrls: ['./life-cycle-test.component.css']
})
export class LifeCycleTestComponent implements OnInit, OnChanges, OnDestroy, DoCheck,AfterViewInit {

  // It is not life cycle event
  constructor(){}


  ngAfterViewInit(): void {
    console.log('on AfterViewInit');
    // throw new Error('Method not implemented.');
  }
  ngDoCheck(): void {
    console.log('on docheck');
    //throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    console.log('on Destroy');
    //throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    //throw new Error('Method not implemented.');
  }

ngOnInit(): void {
  
}

}
