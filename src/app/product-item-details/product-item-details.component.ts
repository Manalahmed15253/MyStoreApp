import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

  productItem:Product;
  amout:number[]=[1,2,3,4,5,6,7,8,9,10]
  selectedOption:number=1;

  constructor(private route:ActivatedRoute,private productsService:ProductService,private cartService:CartService) { 
    this.productsService.fetchProducts();
    this.productsService.products$.subscribe(products => {
      if(products.length>1)
      {
        this.route.params.subscribe((params)=>{
          const id = <number>(params['id']);
          const index = products.findIndex(t => t.id == id);
          this.productItem = products[index];
          }) 
      }      
    });
  }
  ngOnInit(): void {
}

OnAddToCart(){
  this.cartService.addToCart(this.productItem,this.selectedOption);
}

}
