import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user/user.model';
@Component({
  selector: 'app-chatbar',
  templateUrl: './chatbar.component.html',
  styleUrls: ['./chatbar.component.scss']
})
export class ChatbarComponent implements OnInit {

  testUser :User={id: 123 , name: 'username',status:true,imgUrl:"https://pyxis.nymag.com/v1/imgs/c6c/60e/b5bfcbbfa4df1dab8f93b1f196e84e9e2a-10-anime-netflix.rsquare.w700.jpg"};
  
  @Input('contacts') contacts :User[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
