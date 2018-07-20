import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() quotes;
  @Output() deleteQuoteEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  voteUp(quote){
    quote.rating++;
  }

  voteDown(quote){
    quote.rating--;
  }

  delete(quote){
    this.deleteQuoteEvent.emit(quote);
  }
}
