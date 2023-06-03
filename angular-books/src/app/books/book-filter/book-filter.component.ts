import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-filter',
  templateUrl: './book-filter.component.html',
  styleUrls: ['./book-filter.component.css']
})
export class BookFilterComponent implements OnInit {

constructor(private formBuilder : FormBuilder){}

form : FormGroup;

genres = [{id: 1, name : 'Programming'}, {id:2, name  : 'Computer Science'}];

books = [
  {title: 'angular', poster : 'https://m.media-amazon.com/images/P/1484281756.01._SCLZZZZZZZ_SX500_.jpg'},
  {title: 'algorithm', poster : 'https://m.media-amazon.com/images/I/41ApDfh9Q1L._SY346_.jpg'},
  {title: 'react', poster : 'https://m.media-amazon.com/images/P/172004399X.01._SCLZZZZZZZ_SX500_.jpg'},
  {title: 'theory', poster : 'https://m.media-amazon.com/images/P/3031119649.01._SCLZZZZZZZ_SX500_.jpg'}
];

originalBooks = this.books;

ngOnInit(): void {
  
  this.form = this.formBuilder.group({
    title: '',
    genreId : 0,
    availableBooks : false,
    futureRelease : false
  });

  this.form.valueChanges
    .subscribe(values => { 
      //console.log(values);
      this.books = this.originalBooks; //reset books
      this.filterBooks(values);
    });

}

filterBooks(values: any){
  //console.log(values);
  if(values.title){
    this.books = this.books.filter(book => book.title.indexOf(values.title) !== -1);
  }
}

clearForm(){
  this.form.reset();
}

}
