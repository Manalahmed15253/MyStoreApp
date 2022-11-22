import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() product:Product;
  amout:number[]=[1,2,3,4,5,6,7,8,9,10]
  selectedOption:number=1;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  OnAddToCart(){
    this.cartService.addToCart(this.product,this.selectedOption);
  }

}
