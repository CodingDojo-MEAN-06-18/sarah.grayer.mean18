import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  userExists: boolean=null;
  score: number = 0;
  username: string = null;
  constructor(private _GithubService: GithubService){}

  calculateScore(form: NgForm){
    this.username = form.value.username;
    this._GithubService.retrieveGithubUser(this.username)
    .subscribe(
      user => {
        this.userExists = true;
        this.score = user['public_repos'] + user['followers'];
        console.log("User", this.username, "has a score of", this.score);
        form.reset();
      },
      (response: Response) => this.userExists=false
    );
  }
}
