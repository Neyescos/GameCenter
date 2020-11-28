import { Component, Inject, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {User} from '../user'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
@Inject
export class UserComponent implements OnInit {

  user! :User;
  constructor() {
    
  }
  ngOnInit(): void {
    
  }
  
}
