import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  alphaNumbers: number[] = [];
  betaNumbers: number[] = [];
  gammaDiff: number = 0;
  alphaSum = 0;
  betaSum = 0;

  constructor() { }
  
  addNumAlpha() {
    let num = Math.floor(Math.random()*10);
    this.alphaNumbers.push(num);
    console.log("Added num to Alpha", this.alphaNumbers)
    return num
  }

  retrieveAlpha(): number[]{
    return this.alphaNumbers;
  }

  addNumBeta() {
    let num = Math.floor(Math.random()*10);
    this.betaNumbers.push(num);
    console.log("Added num to Beta", this.betaNumbers)
    return num
  }

  retrieveBeta(): number[]{
    return this.betaNumbers;
  }

  diff(): number{
    this.gammaDiff = 0;
    var alpha=0; //reset these to 0 so that multiple clicks here doesn't keep increasing the difference
    var beta=0;

    for (let i=0; i<this.alphaNumbers.length; i++){
      alpha += this.alphaNumbers[i]; //loop through the values of the alphaNumbers[], adding to variable alpha
    }
    for (let i=0; i<this.betaNumbers.length; i++){
      beta += this.betaNumbers[i];
    }
    this.gammaDiff = alpha - beta;
    console.log("Difference is now ", this.gammaDiff);
    return this.gammaDiff;
  }
}
