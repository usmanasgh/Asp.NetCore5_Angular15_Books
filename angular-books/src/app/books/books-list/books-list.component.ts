import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})

export class BooksListComponent implements OnInit {
  
  
  ngOnInit(): void {
    //Defining book object
   
  }

@Input() // MUA: input parameter is used to pass objects from <app-books-list [books]="CurrentBooks"></app-books-list>
books; //MUA : Books are defined here, and we are passing values from app.component.ts

//MUA : define remove funtion
remove(index : number)
{
  // MUA : Implementation goes here
  this.books.splice(index,1);
}

}
