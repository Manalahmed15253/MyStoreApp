import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product.model';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() product:Product;
  @Output() addToCart = new EventEmitter<{product:Product,option:number}>();
  amout:number[]=[1,2,3,4,5,6,7,8,9,10]
  selectedOption:number=1;

  constructor() { }

  ngOnInit(): void {
  }

  OnAddToCart(){
    this.addToCart.emit({product:this.product,option:this.selectedOption});
  }

}
