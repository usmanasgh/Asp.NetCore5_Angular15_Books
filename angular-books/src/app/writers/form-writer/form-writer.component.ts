import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { writerCreationDTO } from '../writers.model';

@Component({
  selector: 'app-form-writer',
  templateUrl: './form-writer.component.html',
  styleUrls: ['./form-writer.component.css']
})
export class FormWriterComponent implements OnInit {

  constructor(private formBuilder : FormBuilder){

  }

  form : FormGroup;

  @Input()
  model : writerCreationDTO;

  @Output()
  onSaveChanges = new EventEmitter<writerCreationDTO>();

  ngOnInit(): void {
    
    this.form = this.formBuilder.group({

      name:['',{
        validators : [Validators.required]
      }],
      dateOfBirth:'',
      picture: ''
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }

  }

  onImageSelected(image){
    this.form.get('picture')?.setValue(image);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
