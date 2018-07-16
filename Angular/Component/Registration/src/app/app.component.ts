import { Component } from '@angular/core';
import { User } from './user'; //constructor User defined in user.us, from 'ng generate Class User'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Registration';

  user = new User();
  users: Array<User> = [];

  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log("submitting form and preventing default", this.user);
    this.users.push(this.user);
    this.user=new User();
    form.reset();
    console.log('users', this.users);
  }
}
