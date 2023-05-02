import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {


  title = 'angular-books';
  display = true;
  
   
  handleRating(rate : number){
    alert('The user selected '+ rate);
  }

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
