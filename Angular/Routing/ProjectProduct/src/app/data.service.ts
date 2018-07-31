import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DataService{
    product: null;
    constructor(private _http: HttpClient){}

    Create(product: string){
        console.log("Creating Data");
         
    }
}

