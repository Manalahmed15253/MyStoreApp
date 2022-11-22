import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[] =[];
  subscription: Subscription;

  constructor(private productsService:ProductService) {
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

}
