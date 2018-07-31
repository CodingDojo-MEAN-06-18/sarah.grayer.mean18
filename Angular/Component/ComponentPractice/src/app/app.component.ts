import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Practice';
  number: number = 10;
  num2: number = 20;
  name: string = "Justin";
  usersObj: Array<string> = [" Sarah Grayer", " Justin Grayer"];
  amount: number = 1.2;
  today = new Date();
  numbers = [1,2,3,4,5];
}

const myString = "a string";
