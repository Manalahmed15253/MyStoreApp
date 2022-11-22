import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  username:string;
  totalMoney:number;

  constructor(private cartService:CartService,private router:Router) {
    this.username = this.cartService.username;
    this.totalMoney = this.cartService.total;
   }

  ngOnInit(): void {
  }

  onBackToProductList() {
    this.cartService.clearCart();
    this.router.navigate(['products']);
  }

}
