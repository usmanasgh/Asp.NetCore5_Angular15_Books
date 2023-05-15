import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

ngOnInit() {
  this.activatedRoute.params.subscribe(params => {
    const id = params['id'];
    alert(id); 
    //console.log(id);
  });
}

}
