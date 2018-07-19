import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //so that angular knows what to do with forms. 

import { AppComponent } from './app.component'; // ./ means it's in the same directory
import { BookNewComponent } from './books/book-new/book-new.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';

@NgModule({ //@NgModule is a decorator, function. Invoke it, pass it the options object
  declarations: [ //notify angular of what components to be utilizing
    AppComponent, BookNewComponent, BookListComponent, BookDetailsComponent
  ],
  imports: [ //any info importing from other parts of angular, or external packages. could provide services, other components, etc. 
    BrowserModule, FormsModule
  ],
  providers: [], //services
  bootstrap: [AppComponent] //entry point into entire app
})
export class AppModule { } //typical to have empty
