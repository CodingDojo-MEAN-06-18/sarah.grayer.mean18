import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GithubUser } from './github-user';


@Injectable({
  providedIn: 'root'
})

export class GithubService {

  constructor(private _http: HttpClient) { }

  retrieveGithubUser(username: string){ 
    return this._http.get(`https://api.github.com/users/${username}`)
  }
}
