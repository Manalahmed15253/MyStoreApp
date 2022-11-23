import { Injectable } from '@angular/core';
import { cartItem } from './cartItem.model';
import { Product } from './product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:cartItem[] = [];
  cartItems$ = new BehaviorSubject<cartItem[]>(this.cartProducts);
  username:string;
  total:number;

  constructor() {
    this.cartProducts = [];
   }

  addToCart(product:Product,amount:number):void{
    const cartItem = {product,amount};
    this.cartProducts.push(cartItem);
    this.cartItems$.next(this.cartProducts);
    this.organizeCart();
    alert(product.name+" added to cart with a quantity of ("+amount+")!");
  }
  organizeCart():void{
    this.cartProducts.sort((a, b) => a.product.id < b.product.id ? -1 : a.product.id > b.product.id ? 1 : 0);
    this.cartItems$.next(this.cartProducts);
    console.log(this.cartProducts);
    for(let i=0;i<this.cartProducts.length-1;i++)
    {
      if(this.cartProducts[i].product.id === this.cartProducts[i+1].product.id)
      {
        this.cartProducts[i].amount = this.cartProducts[i].amount + this.cartProducts[i+1].amount;
        this.cartProducts.splice(i+1, 1);
        this.cartItems$.next(this.cartProducts);
      }
    }
  }

  totalMoney():number{
    let sum = 0;
    for(let i=0;i<this.cartProducts.length;i++)
    {
      sum+=this.cartProducts[i].product.price*this.cartProducts[i].amount 
    }
    return sum;
  }
  clearCart(){
    this.cartProducts = []
    this.cartItems$.next(this.cartProducts);
  }
  cartOwner(username:string,totalMoney:number){
    this.username = username;
    this.total = totalMoney;
  }
  removeItem(id:number){
    const index = this.cartProducts.findIndex(t => t.product.id === id);
    this.cartProducts.splice(index, 1);
    this.cartItems$.next(this.cartProducts);
  }

}
