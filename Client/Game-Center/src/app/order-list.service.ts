import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './Components/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  constructor(private http:HttpClient) { }

  getOrders():Observable<Order[]>{
    let token = localStorage["authorization"].toString();
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token)};
    console.log('получаю заказы');
    let result:Observable<Order[]>;
    result = this.http.get<Order[]>('http://localhost:3000/orders',options); 
    return result;
  }
  postOrder(date:string,DeviceId:number,AdminId:number,CustomerId:number){
    
    let body = `date=${date},Current_CustomerId=${CustomerId},Ordered_DeviceId=${DeviceId},AdminId=${AdminId}`;
    
    let token = localStorage["authorization"].toString();
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token)};
    console.log(body);
    this.http.post('http://localhost:3000/orders',body,options).subscribe(data=>{
      console.log(data);
    });
    
  }
  deleteOrder(id:number){
    try{
      let token = localStorage["authorization"].toString();
     
      let options = 
      {
        headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token),
        body:{"Id":id}
      };
      console.log("удаляю место");
      
      this.http.delete('http://localhost:3000/orders',options)
          .subscribe((s)=>{console.log(s)
        });

    }catch(err){
      console.log(err);
    }
  }
}
