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
    console.log(in_nice_condition);
    let body = `name=${name}`;
    if(in_nice_condition){

      body+=`&In_Nice_Condition=${1}`;
    }
    else{
      body+=`&In_Nice_Condition=${0}`;
    }

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
      console.log("удаляю устройство");
      
      this.http.delete('http://localhost:3000/devices',options)
          .subscribe((s)=>{console.log(s)
        });

    }catch(err){
      console.log(err);
    }
  }
}
