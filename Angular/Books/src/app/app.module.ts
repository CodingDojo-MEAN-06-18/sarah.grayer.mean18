import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //so that angular knows what to do with forms. 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'; // ./ means it's in the same directory

import * as fromBooks from './books';
//import * as fromServices from './services'; older version of angular

import { BookNewComponent } from './books/book-new/book-new.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

import { TitleizePipe } from './titleize.pipe';
import { SearchPipe } from './search.pipe';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';

@NgModule({ //@NgModule is a decorator, function. Invoke it, pass it the options object
  declarations: [ //notify angular of what components to be utilizing
    AppComponent, 
    BookNewComponent, 
    BookListComponent, 
    BookDetailsComponent, 
    TitleizePipe, 
    SearchPipe, NavComponent
  ],
  imports: [ //any info importing from other parts of angular, or external packages. could provide services, other components, etc. 
    BrowserModule, 
    FormsModule, 
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [], //services
  //providers: [...fromServices.services], older version of angular
  bootstrap: [AppComponent] //entry point into entire app
})
export class AppModule { } //typical to have empty
