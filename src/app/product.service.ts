import { Injectable } from '@angular/core';
import { Product } from './product.model';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[] = [];
  products$ = new BehaviorSubject<Product[]>(this.products);

  constructor(private http:HttpClient) { }

  fetchProducts(){
    const subscription = this.http.get<Product[]>('../../assets/data.json').subscribe(products=>{
      this.products = products;
      this.products$.next(this.products);

      subscription.unsubscribe();
    })

}
getProduct(id:number){

}

}
