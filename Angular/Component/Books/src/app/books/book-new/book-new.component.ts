import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Book } from '../.././models/book'; //Book class, path


@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})


export class BookNewComponent implements OnInit {
  novel = new Book(); //associate a new book with every time we submit on form, new instance of this Book class we defined in book.ts and imported here. instance has a type of Book, is a new object of the Book class
  
  @Output() 
  newBook = new EventEmitter<Book>(); //emitting a newBook, with type Book. EventEmitter is  a class that takes in some generic Type, will tell it to emit Book type
  
  constructor() { }

  ngOnInit() {
  }


  onSubmit(event: Event, form: NgForm){ //this event parameter is type Event, the (submit) makes the NgForm available    
    event.preventDefault() //method to stop event from doing default action of the Event type (reloading page)
    console.log("submitting", this.novel);
 
    this.newBook.emit(this.novel); //
    this.novel = new Book(); //stores the new submission as a new instance of Book class

    form.reset(); //clear out form and make empty for next form submission
  }
}
