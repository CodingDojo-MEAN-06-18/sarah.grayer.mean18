import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
  @Input()power;

  ngOnChanges(){
    this.power=this.power*10;
  }

  constructor() { }

  ngOnInit() {
  }

}
