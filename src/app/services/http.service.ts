import { Injectable } from '@angular/core';
import { Products } from '../model/products/products';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  products:Products[]=[
    {name:"Item 1",id:0,price:35},
    {name:"Lux Soap",id:1,price:30},
    {name:"Mobile Phone",id:2,price:9000}
  ]
  constructor() { }

  getProducts():Products[]{
    return this.products;
  }
}
