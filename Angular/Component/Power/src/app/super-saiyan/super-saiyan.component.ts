import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan',
  templateUrl: './super-saiyan.component.html',
  styleUrls: ['./super-saiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit {
  @Input() power;
  ngOnChanges(){
    this.power=this.power*90;
  }

  constructor() { }

  ngOnInit() {
  }

}
