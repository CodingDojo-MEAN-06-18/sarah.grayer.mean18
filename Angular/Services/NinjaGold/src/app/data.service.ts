import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  gold: number = 0;

  constructor() { }

  retrieveGold(): number{
    return this.gold;
  }

  Farm(){
    let num = (Math.floor(Math.random()*(6-2)+2));
    console.log("Earned", num, "gold at the farm");
    this.gold = this.gold + num;
    console.log("Now have", this.gold, "gold")
    return this.gold;
  }
}
