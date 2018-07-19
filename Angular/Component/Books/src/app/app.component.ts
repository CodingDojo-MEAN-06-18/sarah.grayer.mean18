import { Component } from '@angular/core';


@Component({ //decorater with options object
  selector: 'app-root', //how to reference this component in html
  templateUrl: './app.component.html', //relative path, a component can have only one template, although template could be re-used across multiple components
  styleUrls: ['./app.component.css'] //array, can load a number of styles
})


export class AppComponent { //makes this class available elsewhere
  title = 'Books';
}
