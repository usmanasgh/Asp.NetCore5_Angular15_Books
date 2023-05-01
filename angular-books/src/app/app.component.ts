import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    setTimeout(()=>{

      //this.books = [];

      this.CurrentBooks = [{
        title : "Angular: Up and Running: Learning Angular, Step by Step",
        releaseDate : new Date(),
        price : 9.99
      },
      {
        title : "Data Structures And Algorithams",
        releaseDate : new Date(),
        price : 14.99
      }];

      this.futureRelease = [{
        title : "React ",
        releaseDate : new Date(),
        price : 5.99
      },
      {
        title : "Theory of automata",
        releaseDate : new Date(),
        price : 12.49
      }];

    }, 1000);
  }

  CurrentBooks;
  futureRelease;


  handleRating(rate : number){
    alert('The user selected '+ rate);
  }


  title = 'angular-books';

  doubleNumber(n:number)
  {
    return 2*n;
  }
}



// export class AppComponent {
//   title = 'angular-books';
  
//   //Defining book object
//   books = [{
//     title : "Angular: Up and Running: Learning Angular, Step by Step",
//     releaseDate : new Date(),
//     price : 9.99
//   },
//   {
//     title : "Data Structures And Algorithams",
//     releaseDate : new Date(),
//     price : 14.99
//   }];

//   doubleNumber(n:number)
//   {
//     return 2*n;
//   }
// }
