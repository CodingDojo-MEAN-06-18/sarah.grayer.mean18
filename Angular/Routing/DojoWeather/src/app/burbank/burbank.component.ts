import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})

export class BurbankComponent implements OnInit {
  weather;
  temp;
  humidity;
  clouds;
  high;
  low;

  
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weather=this._weatherService.getWeatherData('burbank')
    .then( weather => {
      console.log("weather: ", weather)
      this.humidity=weather.main.humidity;
      this.temp = weather.main.temp;
      this.temp=Math.floor(this.temp*(9/5)-459.67);
      this.high=weather.main.temp_max;
      this.high=Math.floor(this.high*(9/5)-459.67);
      this.low=weather.main.temp_min;
      this.low=Math.floor(this.low*(9/5)-459.67);
      this.clouds=weather.weather[0].description;
    });
  }
}
