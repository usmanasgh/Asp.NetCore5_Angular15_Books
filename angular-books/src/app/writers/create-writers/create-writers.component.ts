import { Component, OnInit } from '@angular/core';
import { writerCreationDTO } from '../writers.model';

@Component({
  selector: 'app-create-writers',
  templateUrl: './create-writers.component.html',
  styleUrls: ['./create-writers.component.css']
})
export class CreateWritersComponent implements OnInit {

  constructor(){


  }

  ngOnInit(): void {
    
  }

  saveChanges(writerCreationDTO : writerCreationDTO){
    console.log(writerCreationDTO);
  }

}
