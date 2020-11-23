import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {User} from '../user'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user :User;
  constructor(user: User) {
    this.user = user;
  }
  ngOnInit(): void {
  }
  
}
