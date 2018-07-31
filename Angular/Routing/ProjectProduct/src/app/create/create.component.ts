import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  product= null;

  //@Input() product: [string, number];

  constructor(private _dataService: DataService) { }

  onClick(){
    console.log("clicking create");
    this.product="new product"
    this.product = this._dataService.Create(this.product);
     
  }

  ngOnInit() {
  }

}
