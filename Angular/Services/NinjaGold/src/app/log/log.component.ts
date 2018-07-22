import { Component, OnInit, Input  } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})

export class LogComponent implements OnInit {
  gold: number = null;
  events: string[] = [];
  @Input() building: string;
  @Input() action: string;
 
  constructor(private _dataService: DataService) { }
  
  ngOnInit(){
    this.events=this._dataService.retrieveLog();
  }

}
