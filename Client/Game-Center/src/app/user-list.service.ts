import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './Components/user';
import { UserComponent } from './Components/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http:HttpClient) { }
  getUsers():Observable<User[]>{
    let token = localStorage["authorization"].toString();
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token)};
    console.log('получаю юзеров');
    let result:Observable<User[]>;
    result = this.http.get<User[]>('http://localhost:3000/users',options); 
    return result;
  }
}
