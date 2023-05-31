import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUpperCase } from 'src/app/validators/firstLetterUpperCase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

constructor(private router : Router){}

form : FormGroup;

ngOnInit() : void {
  
}

saveChanges(genreCreationDTO : genreCreationDTO){

  //... save the genre

  console.log(genreCreationDTO);
  this.router.navigate(['/genres'])

  }

}
