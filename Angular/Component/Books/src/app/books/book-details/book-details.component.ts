import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators'; //

import { Book } from '../../models/book';

import { BookService } from '../../services';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})

export class BookDetailsComponent implements OnInit { //no actions here, not selecting anything within this component to implement
  @Input() novel: Book;  
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe( //switchMap is useful to handle subscription. Accepting paramMap into switchMap which will cancel other requests, or handle this subscription. Getting param through get method, requesting novel_id. Subscribing to novel, streaming whatever services is giving.  
      switchMap(params => this.bookService
      .getBook(params.get('novel_id'))
    )) 
      .subscribe(novel => (this.novel = novel));
  }
}
