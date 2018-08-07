import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, Routes, RouterModule } from '@angular/router';
//import { Subscription } from 'rxjs';
import { PRODUCTS } from '../data/product-data';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})

export class ProductNewComponent implements OnInit{
  newProduct: Product = new Product()
  //product: Product = new Product(); //start with an instance of product (with shape Product defined in product.ts) in order to reference this.product
  products: Array<Product> = PRODUCTS
  
  constructor(
    private _productService: ProductService,
    private _router: Router) {//inject productService and Router
      this._productService.productsObservable.subscribe((products)=>{
        this.products = PRODUCTS;
      })
   }

  ngOnInit() {
    this.newProduct = new Product();
  }

  onSubmit(event: Event, form: NgForm){
    event.preventDefault(); //method to stop event from doing default action (with form, from re-loading)
   // console.log('submitting ', this.newProduct)
   //this.newProduct.emit(this.newProduct);
    if (this.newProduct.imgURL === 'null' || this.newProduct.imgURL === null || this.newProduct.imgURL.length<1){
      this.newProduct.imgURL = null;
    }
    //this.newProduct = form.value;
    console.log("form value is: ", form.value, "newProduct is: ", this.newProduct, "products is: ", this.products);
    this.products.push(this.newProduct);
    this._productService.updateProducts(this.products);
    this.newProduct= new Product(); //have to create new product here before reset() below, otherwise values are set to null
    this._router.navigate(['products']);
    //console.log('our prodcuts ', this.products)


    //form.reset(); //clear out form content to make it available for next submission (prevent form adding same product multiple times). Passed in form.

    //this.sub = this.productService.createProduct(this.product).subscribe(product=>{
      //this.router.navigateByUrl('/');
    //}, error=>{

    //});
  }
}
