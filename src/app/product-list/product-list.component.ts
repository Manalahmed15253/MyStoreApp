import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[] =[];
  subscription: Subscription;

  constructor(private productsService:ProductService,private cartService:CartService) {
    this.productsService.fetchProducts();
    this.subscription = this.productsService.products$.subscribe(products => {
      this.products = products;
    });
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  OnAddToCart(productData:{product:Product,option:number}){
    this.cartService.addToCart(productData.product,productData.option);
  }

}
