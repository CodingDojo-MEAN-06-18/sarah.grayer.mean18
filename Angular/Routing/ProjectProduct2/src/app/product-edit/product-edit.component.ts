import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from './../product.service';
import { PRODUCTS } from '../data/product-data';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {
  products: Array<Product> = PRODUCTS
  product: Product;

  constructor(
    private _route: ActivatedRoute,
    private _prodcuctService: ProductService,
    private _router: Router
  ) { 
    this._prodcuctService.productsObservable.subscribe( (products)=>{
      this.products = PRODUCTS;
    });
    this._route.params.subscribe(param =>{
      for (let idx = 0; idx <this.products.length; idx++){
        if(this.products[idx].id == param.id){
          this.product = this.products[idx];
          console.log(param);
          break
        }
      }
      
    })
  }

  ngOnInit() {
  }

  onUpdate(){
    this._prodcuctService.updateProducts(this.products);
    this._router.navigate(['products']);
  }

  onDelete(product: Product){
    console.log("deleting ", product);
    var index: number = this.products.indexOf(product);
    if (index !== -1 ){
      this.products.splice(index, 1)
    }
    this._router.navigate(['products']);
  }

}
