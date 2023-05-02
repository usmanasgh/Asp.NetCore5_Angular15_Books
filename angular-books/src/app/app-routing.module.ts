import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './utilities/rating/rating.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'rating', component:RatingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
