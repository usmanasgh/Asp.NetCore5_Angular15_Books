import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})

export class EditBooksComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id); 
    });
  }
  
}