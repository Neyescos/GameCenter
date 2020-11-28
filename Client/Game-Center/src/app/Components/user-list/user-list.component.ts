import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { UserListService } from 'src/app/user-list.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users :any[] =[];
  constructor(private service :UserListService) { }

  ngOnInit(): void {
    console.log("loaded");
    try{
      //const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
      let myToken;
      this.service.getUsers().subscribe(
        result =>{
          result.forEach(user => {
            this.users.push(user);
          });
          
        }
      );
    }catch(err){
      console.log(err);
      console.log('user-list error');
    }
    
  }

}
