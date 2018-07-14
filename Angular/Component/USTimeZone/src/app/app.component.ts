import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  time = new Date(); //declare time variable
  lastTimeZoneSelected = null; //nothing was previously selected upon page load, nothing highlighted

  getDatebyZone(zone){
    this.time = new Date(); 
    console.log(`Clicking, TimeZone is:`, zone);
    if(zone==='PST'){
      this.time.setHours(this.time.getHours()-2); //subtracts 2 hrs from current time
      this.lastTimeZoneSelected= zone; //sets variabled to what is clicked, allowing to style that button with blue background
      console.log(`Time in `, zone, `is: `, this.time)   
    }
    else if(zone==='MST'){
      this.time.setHours(this.time.getHours()-1);
      this.lastTimeZoneSelected= zone; 
      console.log(`Time in `, zone, `is: `, this.time)
    }
    else if(zone==='CST'){
      this.lastTimeZoneSelected= zone; 
      console.log(`Time in `, zone, `is: `, this.time)   
    }
    else if(zone==='EST'){
      this.time.setHours(this.time.getHours()+1);
      this.lastTimeZoneSelected= zone; 
      console.log(`Time in `, zone, `is: `, this.time)
    }
    else if(zone==='none'){
      this.lastTimeZoneSelected= null; //clearn this variable, nothing highlighted
      this.time= null; //clearn time variable, so nothing is printed
      console.log(`Time in `, zone, `is: `, this.time)
    }   
  }
}
