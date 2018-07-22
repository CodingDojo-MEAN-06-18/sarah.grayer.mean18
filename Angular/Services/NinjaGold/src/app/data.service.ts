import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  gold: number = 0;
  logArray: string[]=[];

  constructor() { }

  retrieveGold(): number{
    return this.gold;
  }

  Go(location: string){
    console.log("location is ", location)
    if (location == 'Farm'){
      let num: number = (Math.floor(Math.random()*(6-2)+2));
      this.gold += num;
      var message: string = `Earned ${num} gold at the ${location}` 
      this.logArray.push(message);
      console.log("Earned", num, "gold at the farm & now have", this.gold, "gold.");
    }
    else if (location =='Cave'){
      let num = (Math.floor(Math.random()*(11-5)+5));
      this.gold +=num;
      var message: string = `Earned ${num} gold at the ${location}`
      this.logArray.push(message);
      console.log("Earned", num, "gold at the", location, " & now have ", this.gold, "gold.");
    }
    else if (location =='Casino'){
      let num = (Math.floor(Math.random()*(101- -100)+ -100));
      this.gold +=num;
      if(num<0){
        num = Math.abs(num);
        var message: string = `Lost ${num} gold at the ${location}`
        this.logArray.push(message);
        console.log("Lost ",  Math.abs(num), "gold at the ", location, " & now have ", this.gold, "gold.")
      }
      else{
        var message: string = `Earned ${num} gold at the ${location}`
        this.logArray.push(message);
        console.log("Earned ", num, "gold at the ", location, " & now have ", this.gold, "gold.");        
      }
    }
    else if (location=='House'){
      let num = (Math.floor(Math.random()*(16-7)+7));
      this.gold +=num;
      var message: string = `Earned ${num} gold at the ${location}`
      this.logArray.push(message);
      console.log("Earned", num, "gold at the ", location, "& now have ", this.gold, "gold.");
    }    
    return this.gold;
  }

  retrieveLog(){
    return this.logArray;
  }
 
}
