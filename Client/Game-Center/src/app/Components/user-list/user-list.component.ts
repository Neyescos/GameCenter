import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserListService } from 'src/app/user-list.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users! :Observable<UserComponent>;
  constructor(private service :UserListService) { }

  ngOnInit(): void {
    try{
      //const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
      let myToken;
      this.service.getUsers().subscribe(
        result =>{
          result.user
        }

          
        
      );
    }catch{
      console.log('ошибка логина');
    }
    
  }

}
