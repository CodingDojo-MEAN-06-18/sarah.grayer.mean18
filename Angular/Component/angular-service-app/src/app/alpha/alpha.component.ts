import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: number[]=[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.numbers=this._dataService.retrieveNumbers(); //gets numbers [] from retrieveNumbers in data.service
  }

  pushOne(){
    this._dataService.addNumber(1); //calling on method in data.service file, passing in value of 1 into num
  }

  log(){
    this._dataService.retrieveNumbers(); //calls on method in data.service file, updates real time
  }

}
