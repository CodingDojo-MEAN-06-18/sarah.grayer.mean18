import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductNewComponent } from './product-new/product-new.component';


const routes: Routes = [
  {
    path: "", 
    component: ProductHomeComponent, 
    pathMatch: 'full'
  },
  {
    path: 'products', 
    component: ProductListComponent
  },
  {
    path: 'products/edit/:id', 
    component: ProductEditComponent
  },
  {
    path: 'products/new', 
    component: ProductNewComponent,
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

//export const routing = RouterModule.forRoot(routes);
export class AppRoutingModule { }