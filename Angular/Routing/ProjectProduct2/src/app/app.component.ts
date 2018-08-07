import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { RouterModule, Routes } from '@angular/router'
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Project Product Management';

  constructor(private _productService: ProductService){

    //this._productService.productsObservable.subscribe((products)=>{
     // this.products=products;
   // });

  }

}
