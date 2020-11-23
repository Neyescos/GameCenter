import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserComponent } from './Components/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http:HttpClient) { }
  getUsers():Observable<UserComponent>{
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')};
    console.log('получаю юзеров');
    let result:Observable<UserComponent>;
    result = this.http.get<UserComponent>('http://localhost:3000/users',options); 
    return result;
  }
}
