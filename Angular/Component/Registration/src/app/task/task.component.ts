import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  //tell task.compenents to expect the myTasks attribute to be available
  @Input() myTasks; //expects parent component to have loaded this component, and it be passing myTasks as an attribute

  @Output() myEvent = new EventEmitter();

  constructor() { }

  callParent(){ //this emits an event to the element it's being loaded from  
    this.myEvent.emit(10); //can pass value of 10 through the keyword $event. Sends data
  }

  ngOnInit() {
  }

}
