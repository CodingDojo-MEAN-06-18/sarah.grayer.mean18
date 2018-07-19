import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})


export class BookDetailsComponent implements OnInit { //no actions here, not selecting anything within this component to implement
  @Input() novel: Book;
  
  constructor() { }

  ngOnInit() {
  }

}
