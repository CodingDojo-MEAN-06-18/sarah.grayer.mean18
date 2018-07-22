import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {
  gold: number = null;
  @Input() building: string;
  @Input() action: string;
  @Output() dataEventEmitter = new EventEmitter();
 
  constructor(private _dataService: DataService) { }

  onClick(){
    console.log("went to: ", this.building);
    this.gold = this._dataService.Go(this.building); 
    this.dataEventEmitter.emit(this.gold); //sends gold value to app.component
  }
  
  ngOnInit(){
    this.gold = this._dataService.retrieveGold();
  }

}
