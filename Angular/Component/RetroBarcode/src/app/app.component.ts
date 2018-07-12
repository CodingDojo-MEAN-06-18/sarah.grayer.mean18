import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Retro Barcode Generator';
  imageArray = []; //*ngFor="let color of imageArray" [ngStyle]="{'background-color': color, 'display':'inline-block'}"

  fillimageArray(){ //loops 10 times, pushes color to imageArray
    for(let y=0; y<10;y++){
      const randNum = (Math.floor(Math.random()*6))+1;
      if(randNum === 1){
        this.imageArray.push('DarkSeaGreen');
      }
      else if(randNum===2){
        this.imageArray.push('MediumBlue');
      }
      else if(randNum===3){
        this.imageArray.push('MediumAquaMarine');
      }
      else if(randNum===4){
        this.imageArray.push('DarkBlue');
      }
      else if(randNum===5){
        this.imageArray.push('Chartreuse');
      }
      else if(randNum===6){
        this.imageArray.push('IndianRed');
      }
    }
  }

  ngOnInit(){ //ngOnInit is called right after directive's data-bound properties of directive are intialized. Invoked only once when the directive is instansiated.
    this.fillimageArray();
  }
}
