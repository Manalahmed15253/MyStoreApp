import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { cartItem } from '../cartItem.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {

  cartProducts:cartItem[] = []
  subscription: Subscription;
  totalMoney:number;
  @ViewChild('f') form:NgForm;
  username:string='';
  address:string='';
  cardnumber:string='';

  constructor(private cartService:CartService,private router:Router) { 
    this.subscription = this.cartService.cartItems$.subscribe(cartItems => {
      this.cartProducts = cartItems;
      this.totalMoney = this.cartService.totalMoney();
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onChange(amount:number){
    console.log(amount);
    this.totalMoney = this.cartService.totalMoney();
  }
  onSubmit(){
    this.username = this.form.value.customername;
    this.address = this.form.value.address;
    this.cardnumber = this.form.value.credit;
    this.cartService.cartOwner(this.username,this.totalMoney);
    this.router.navigate(['confirmation']);
  }



}
