import { Component, OnInit } from '@angular/core';
import { Book } from '../.././models/book'; //Book class, path
//import { BOOKS } from '../.././data/book-data' for sample data rather than API
import { BookService } from '../../services/'; //bring in to inject

import { TitleizePipe } from '../../titleize.pipe';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [TitleizePipe],
})


export class BookListComponent implements OnInit { //list declarations at top, above any methods. This class
  books: Array<Book> = []; //initialize w/empty array, way to store the book objects as created. Can initialize w/BOOKS, sample data imported from book-data.ts. Use empty array with API.
  selectedBook: Book; //give type Book to variable selectedBook
  errorMessage: string;

  constructor(
    private titleize: TitleizePipe,
    private bookService: BookService //to inject the service
  ) { } //inject pipe here, import

  ngOnInit() { //request info from bookService
    this.bookService.getBooks().subscribe(books => { //listen via subscribe for observable
      this.books = books;
      this.books.forEach(novel => { 
        //novel.author = this.titleize.transform(novel.author); //adds pipe upon component list initialization
        //novel.title = this.titleize.transform(novel.title);
      });
    })
  }

  onSelect(novel: Book){
    console.log("selecting", novel)
    if(this.selectedBook === novel){
      this.selectedBook = null; //define to null in order to make that section disappear if selected again
    }
    else{
      this.selectedBook=novel; //selectedBook variable stores whichever book is clicked. 
      this.selectedBook.author = this.titleize.transform(novel.author); //titleize.transform to pipe in details component
      this.selectedBook.title = this.titleize.transform(novel.title);
      this.selectedBook.publisher = this.titleize.transform(novel.publisher);
      
    }
    //could also write above lines as: this.selectedBook = this.selectedBook === book ? null : book;
  }

  onCreate(novel: Book){ //pass in w/$event variable
    console.log("creating book", novel);
    this.books.push(novel);
  }

  onDelete(id: number){
    console.log("Delete", id);
    this.bookService.deleteBook(id).subscribe(()=> {
      this.books = this.books.filter(book=> book.id !== id); //returns an array of elements meeting a condition. Here, creates new array of books without this id 
      
    }, error=>{
      console.log('error', error);
      this.errorMessage=error.statusText;
    });
  }

  onEvent(event: Event){
    console.log('cancel select');
    event.stopPropagation(); //this runs so that clicking delete button doesn't also trigger the onSelect method which it is bubbled into
  }
}

