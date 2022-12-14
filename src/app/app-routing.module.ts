import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductItemDetailsComponent } from './product-item-details/product-item-details.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'products',component:ProductListComponent},
  {path:'cart',component:CartComponent},
  {path:'products/:id',component:ProductItemDetailsComponent},
  {path:'confirmation',component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
