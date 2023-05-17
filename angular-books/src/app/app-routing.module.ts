import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { IndexGenresComponent } from './genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexWritersComponent } from './writers/index-writers/index-writers.component';
import { CreateWritersComponent } from './writers/create-writers/create-writers.component';
import { EditWritersComponent } from './writers/edit-writers/edit-writers.component';
import { CreateBooksComponent } from './books/create-books/create-books.component';
import {EditBooksComponent} from './books/edit-books/edit-books.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  {path:'', component:HomeComponent},
  
  {path:'genres', component:IndexGenresComponent},
  {path:'genres/create', component:CreateGenreComponent},
  {path:'genres/edit/:id', component:EditGenreComponent},

  {path:'rating', component:RatingComponent},

  {path:'writers', component:IndexWritersComponent},
  {path:'writers/create', component:CreateWritersComponent},
  {path:'writers/edit/:id', component:EditWritersComponent},
  
  {path:'books/create', component:CreateBooksComponent},
  {path:'books/edit/:id', component:EditBooksComponent},
  // {path:'**',component:HomeComponent} // MUA: Default component
   {path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// testing checkin from Dell PC
