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

ngOnInit(): void {
  
  this.form = this.formBuilder.group({
    title: '',
    genreId : 0,
    availableBooks : false,
    futureRelease : false

  });

}

clearForm(){
  
}

}
