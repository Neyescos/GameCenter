import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './Components/client';
import { ClientComponent } from './Components/client/client.component';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  getClients():Observable<Client[]>{
    let token = localStorage["authorization"].toString();
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token)};
    console.log('получаю клиентов');
    let result:Observable<Client[]>;
    result = this.http.get<Client[]>('http://localhost:3000/customers',options); 
    return result;
  }
  postClient(name:string,phone:string){
    let body = `name=${name}&phone=${phone}&grant_type=password`;
    let token = localStorage["authorization"].toString();
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token)};
    console.log(body);
    this.http.post('http://localhost:3000/customers',body,options).subscribe(data=>{
      console.log(data);
    });
    
  }
  deleteClient(id:number){
    let token = localStorage["authorization"].toString();
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token)};
    
    this.http.delete('http://localhost:3000/customers',options);
    // let result:Observable<ClientComponent[]>;
    // result = this.http.get<ClientComponent[]>('http://localhost:3000/customers',options); 
    // return result;
  }
}
