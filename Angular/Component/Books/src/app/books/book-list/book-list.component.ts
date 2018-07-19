import { Component, OnInit } from '@angular/core';
import { Book } from '../.././models/book'; //Book class, path
import { BOOKS } from '../.././data/book-data'


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})


export class BookListComponent implements OnInit { //list declarations at top, above any methods. This class
  books: Array<Book> = BOOKS; //initialize w/empty array, way to store the book objects as created. Here, initializing w/BOOKS, sample data imported from book-data.ts
  selectedBook: Book; //give type Book to variable selectedBook

  constructor() { }

  ngOnInit() {
  }

  onSelect(novel: Book){
    console.log("selecting", novel)
    if(this.selectedBook === novel){
      this.selectedBook = null; //define to null in order to make that section disappear if selected again
    }
    else{
      this.selectedBook=novel; //selectedBook variable stores whichever book is clicked. 
    }
    //could also write above lines as: this.selectedBook = this.selectedBook === book ? null : book;
  }

  onCreate(novel: Book){ //pass in w/$event variable
    console.log("creating book", novel);
    this.books.push(novel);
  }
}

