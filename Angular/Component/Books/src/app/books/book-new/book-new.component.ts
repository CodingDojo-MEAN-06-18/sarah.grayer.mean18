import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Book } from '../.././models/book'; //Book class, path
import { BookService } from '../../services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})


export class BookNewComponent implements OnInit, OnDestroy {
  novel = new Book(); //associate a new book with every time we submit on form, new instance of this Book class we defined in book.ts and imported here. instance has a type of Book, is a new object of the Book class
  sub: Subscription;

  @Output() 
  newBook = new EventEmitter<Book>(); //emitting a newBook, with type Book. EventEmitter is  a class that takes in some generic Type, will tell it to emit Book type
  
  constructor(
    private bookService: BookService,
    private router: Router,
  ) { } //inect bookService, Router

  ngOnInit() {
  }
  ngOnDestroy(){
    if (this.sub){ //do this only after a book is clicked on, otherwise sub is undefined and will throw error with this
      this.sub.unsubscribe(); //unsubscribe from observable to remove the content/memory leak
    }
  }


  onSubmit(event: Event, form: NgForm){ //this event parameter is type Event, the (submit) makes the NgForm available    
    event.preventDefault() //method to stop event from doing default action of the Event type (reloading page)
    console.log("submitting", this.novel);

    this.sub = this.bookService.createBook(this.novel).subscribe(novel=> { //send new content to API through service
      //this.newBook.emit(novel);
      //this.novel = new Book(); //stores the new submission as a new instance of Book class

      //form.reset(); //clear out form and make empty for next form submission

      this.router.navigateByUrl('/');
    }, error=> {
      //handle errors
    });
  }
}
