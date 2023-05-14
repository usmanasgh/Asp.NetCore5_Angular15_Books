import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { IndexGenresComponent } from './genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexWritersComponent } from './writers/index-writers/index-writers.component';
import { CreateWritersComponent } from './writers/create-writers/create-writers.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'genres', component:IndexGenresComponent},
  {path:'genres/create', component:CreateGenreComponent},
  {path:'rating', component:RatingComponent},

  {path:'writers', component:IndexWritersComponent},
  {path:'rating', component:CreateWritersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// testing checkin from Dell PC
