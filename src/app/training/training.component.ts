import { Component, OnInit } from '@angular/core';
import { Products } from '../model/products/products';
import {HttpService} from '../services/http.service'


@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  isLoggedIn:boolean = true;
  
  httpService:HttpService;

  products:Products[]=[];

  constructor() {
    this.httpService= new HttpService();
   }

  onGetProductClicked(){
    this.products = this.httpService.getProducts();
  }

  onLoginButtonClick():void{
    this.isLoggedIn = true;
  }

  onLogoutButtonClick():void{
    this.isLoggedIn = false;
  }

  ngOnInit(): void {
  }

}
