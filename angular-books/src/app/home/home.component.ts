import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {
    setTimeout( ()=> {

      //this.books = [];

      this.CurrentBooks = [{
        title : "Angular: Up and Running: Learning Angular, Step by Step",
        releaseDate : new Date(),
        price : 9.99,
        poster:'https://m.media-amazon.com/images/P/1484281756.01._SCLZZZZZZZ_SX500_.jpg'
      },
      {
        title : "Data Structures And Algorithams",
        releaseDate : new Date(),
        price : 14.99,
        poster:'https://m.media-amazon.com/images/I/41ApDfh9Q1L._SY346_.jpg'
      }];

      this.futureRelease = [{
        title : "React ",
        releaseDate : new Date(),
        price : 5.99,
        poster :'https://m.media-amazon.com/images/P/172004399X.01._SCLZZZZZZZ_SX500_.jpg'
      },
      {
        title : "Theory of automata",
        releaseDate : new Date(),
        price : 12.49,
        poster : 'https://m.media-amazon.com/images/P/3031119649.01._SCLZZZZZZZ_SX500_.jpg'
      }];

    }, 1000);
  }

  CurrentBooks;
  futureRelease;

}
