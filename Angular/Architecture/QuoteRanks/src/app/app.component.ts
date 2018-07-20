import { Component } from '@angular/core';
import { Quote } from './models/quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes = [
    {body: "Test", author: "Sarah", rating: 0},
    {body: "Test, test, test", author: "Justin", rating: 0},
    {body: "This is a very special test, to see how the spacing looks now", author: "Sarah", rating: 0}
  ]
  createQuote(quote){
    console.log("creating", quote);
    this.quotes.push(quote);
  }
  deleteQuote(quote){
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }
}
