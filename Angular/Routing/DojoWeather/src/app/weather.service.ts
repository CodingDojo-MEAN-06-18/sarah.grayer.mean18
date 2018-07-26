import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable()

export class WeatherService{
    constructor(private _http: HttpClient){}

 
    getWeatherData(city:string){
        return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ac0857f2f9011ebd0cf90ec5e9d042b5`)
        //.map(data=>data.json())
        .toPromise();
    }
}