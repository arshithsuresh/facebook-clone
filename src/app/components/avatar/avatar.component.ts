import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {User} from '../../model/user/user.model';
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input('user') userData?:User;

  defualtAvatar:string="assets/ico/avatar.png";
  constructor() { }

  ngOnInit(): void {
  }

}
