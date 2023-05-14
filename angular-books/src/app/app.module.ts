 import { NgModule } from '@angular/core';
//import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { LifeCycleTestComponent } from './life-cycle-test/life-cycle-test.component';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexWritersComponent } from './writers/index-writers/index-writers.component';
import { CreateWritersComponent } from './writers/create-writers/create-writers.component';

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
    CreateWritersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
