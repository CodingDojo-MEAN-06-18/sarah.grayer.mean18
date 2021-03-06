import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switches = [true, true, true, true, true, true, true];

  flipSwitch(idx){ //reverses whether switch or !switch, depending on the idx clicked
    this.switches[idx] = !this.switches[idx];
  }
}
