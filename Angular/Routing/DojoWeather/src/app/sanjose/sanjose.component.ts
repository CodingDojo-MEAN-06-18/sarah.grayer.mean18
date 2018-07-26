import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather;
  temp;
  humidity;
  clouds;
  high;
  low;
  main;


  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather=this._weatherService.getWeatherData('san jose')
    .then( weather => {
      console.log("this.weather: ", this.weather)
      console.log("weather: ", weather)
      this.humidity=weather.main.humidity;
      this.temp = weather.main.temp;
      this.temp=Math.floor(this.temp*(9/5)-459.67);
      this.high=weather.main.temp_max;
      this.high=Math.floor(this.high*(9/5)-459.67);
      this.low=weather.main.temp_min;
      this.low=Math.floor(this.low*(9/5)-459.67);
      this.clouds=weather.weather[0].description;
    })

  }

}
