import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from './Components/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceListService {

  constructor(private http:HttpClient) { }
  getDevices():Observable<Device[]>{
    let token = localStorage["authorization"].toString();
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token)};
    console.log('получаю клиентов');
    let result:Observable<Device[]>;
    result = this.http.get<Device[]>('http://localhost:3000/devices',options); 
    return result;
  }
  postDevice(name:string,in_nice_condition:boolean){
    let condition = 0;
    if(in_nice_condition==true){
      condition=1;
    }
    let body = `name=${name}&In_Nice_Condition=${condition}`;
    let token = localStorage["authorization"].toString();
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token)};
    console.log(body);
    this.http.post('http://localhost:3000/devices',body,options).subscribe(data=>{
      console.log(data);
    });
    
  }
  deleteDevice(id:number){
    try{
      let token = localStorage["authorization"].toString();
     
      let options = 
      {
        headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token),
        body:{"Id":id}
      };
      console.log("удаляю клиента");
      
      this.http.delete('http://localhost:3000/devices',options)
          .subscribe((s)=>{console.log(s)
        });

    }catch(err){
      console.log(err);
    }
  }
}
