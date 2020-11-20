import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {User} from './user'
import { UserModel } from './UserModel';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationServiceService {

  constructor(private http:HttpClient) { }
  data!: Observable<any>;
  login(username:string,password:string){
    let body = `User_Name=${username}&User_Password=${password}&grant_type=password`;
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')};
    console.log('вошел');
    let result:Observable<UserModel>;
    result = this.http.post<UserModel>('http://localhost:3000/login',body,options);
    //result.forEach(x=>console.log(x));
    return result;
  }
  
 
}
