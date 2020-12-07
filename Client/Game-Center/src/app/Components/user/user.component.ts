import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user!:User;
  constructor() { }

  ngOnInit(): void {
    console.log(this.user.id);
  }

}
