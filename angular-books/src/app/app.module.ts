 import { NgModule } from '@angular/core';
 //import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { LifeCycleTestComponent } from './life-cycle-test/life-cycle-test.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexWritersComponent } from './writers/index-writers/index-writers.component';
import { CreateWritersComponent } from './writers/create-writers/create-writers.component';
import { CreateBooksComponent } from './books/create-books/create-books.component';
import { EditWritersComponent } from './writers/edit-writers/edit-writers.component';
import { EditBooksComponent } from './books/edit-books/edit-books.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { BookFilterComponent } from './books/book-filter/book-filter.component';
import { FormWriterComponent } from './writers/form-writer/form-writer.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    GenericListComponent,
    MenuComponent,
    RatingComponent,
    LifeCycleTestComponent,
    HomeComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexWritersComponent,
    CreateWritersComponent,
    CreateBooksComponent,
    EditWritersComponent,
    EditBooksComponent,
    EditGenreComponent,
    FormGenreComponent,
    BookFilterComponent,
    FormWriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
