import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  gammaVal: number = 0;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  onClick(){
    this.gammaVal = this._dataService.diff();
  }

}
