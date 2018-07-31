import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {BOOKS} from '../data/book-data'; //sample data
import { Book } from '../models/book';

import { of, Observable } from 'rxjs'; //observable operator, will take some kind of data and turn it into an observable

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.http.get <Book[]> (this.base); //needs url as a string passed in, accessing mock api. Tell it what type of info with Book[]
    //return of(BOOKS); //book array as an observable
  }

  createBook(novel: Book): Observable<Book>{
    return this.http.post<Book>(this.base, novel);
  }

  deleteBook(id: number): Observable<Book>{ //sending back Book observable
    return this.http.delete<Book>(`${this.base}/${id}`); //tell it what type of data this is streaming back (Book)
  }

  getBook(id: string): Observable<Book>{ //return an observable
    return this.http.get<Book>(`${this.base}/${id}`) //observable of type Book
  }
}
