import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from './../product.service';
import { PRODUCTS } from '../data/product-data';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  //products: Array<Product> = [];
  products: Array<Product> = PRODUCTS; //Array<Product> instructs that 'products' is made up of an array of type Product only
  selectedProduct: Product;
  deletingProduct: Product;

  constructor() { }

  onSelect(product: Product){
    console.log("selecting ", product);
    this.selectedProduct = product;
  }

  onDelete(product: Product){
    console.log("deleting ", product);
    var index: number = this.products.indexOf(product);
    if (index !== -1 ){
      this.products.splice(index, 1)
    }   
  }

  ngOnInit() {
    //this._productService.productsObservable.subscribe((products)=>{
     // this.products=products;
     // console.log(products)
   // });
  }

}
