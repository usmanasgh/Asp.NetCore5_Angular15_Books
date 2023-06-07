import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { writerCreationDTO } from '../writers.model';

@Component({
  selector: 'app-edit-writes',
  templateUrl: './edit-writers.component.html',
  styleUrls: ['./edit-writers.component.css']
})
export class EditWritersComponent implements OnInit {

constructor(private activatedRoute:ActivatedRoute){}

// ngOnInit(): void {
//   this.activatedRoute.params.subscribe(params => {
//     alert(params.id); 
//   });
// }

model : writerCreationDTO = {name: 'Usman Asghar', dateOfBirth : new Date(), picture : ''}

ngOnInit() {
  this.activatedRoute.params.subscribe(params => {
    const id = params['id'];
    //alert(id); 
    //console.log(id);
  });
}

  saveChanges(writerCreationDTO : writerCreationDTO){
    console.log(writerCreationDTO);
  }

}
