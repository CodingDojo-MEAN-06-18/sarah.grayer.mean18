import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  gold: number = 0;

  title = 'app';

  constructor(private _dataService: DataService){}

  ngOnInit(){
    this.gold = this._dataService.retrieveGold();
  } 

}
