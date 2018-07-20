import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  gold: number = null;

  constructor(private _dataService: DataService) { }

  ngOnInit(){
    //this.gold = this._dataService.retrieveGold();
  }

  onClickFarm(){
    console.log("went to farm");
    this._dataService.Farm()
    this._dataService.retrieveGold();
  }

  onClickCave(){
    console.log("went to cave");
  }

  onClickCasino(){
    console.log("went to casino");
  }

  onClickHouse(){
    console.log("went to house");
  }
}
