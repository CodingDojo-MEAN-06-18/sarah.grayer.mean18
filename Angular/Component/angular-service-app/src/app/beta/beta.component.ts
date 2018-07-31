import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}
