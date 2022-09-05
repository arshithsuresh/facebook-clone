import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string ="asd";
  password:string ="";

  constructor() { }

  ngOnInit(): void {
  }

  login(form : NgForm)
  {
    console.log("username : "+this.username+"  Password : "+this.password)
  }

  openRegisterForm(): void{
    
  }

}
