import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayingSpace } from './Components/playingSpace';

@Injectable({
  providedIn: 'root'
})
export class PlayngSpaceListService {

  constructor(private http:HttpClient) { }

  getSpaces():Observable<PlayingSpace[]>{
    let token = localStorage["authorization"].toString();
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token)};
    console.log('получаю места');
    let result:Observable<PlayingSpace[]>;
    result = this.http.get<PlayingSpace[]>('http://localhost:3000/playingspaces',options); 
    return result;
  }
  postSpace(device:number,isEmpty:boolean){
    console.log(isEmpty);
    let body = `DeviceId=${device}`;
    if(isEmpty){

      body+=`&Is_Empty=${1}`;
    }
    else{
      body+=`&Is_Empty=${0}`;
    }

    let token = localStorage["authorization"].toString();
    let options = {headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token)};
    console.log(body);
    this.http.post('http://localhost:3000/playingspaces',body,options).subscribe(data=>{
      console.log(data);
    });
    
  }
  deleteSpace(id:number){
    try{
      let token = localStorage["authorization"].toString();
     
      let options = 
      {
        headers:new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('authorization',token),
        body:{"Id":id}
      };
      console.log("удаляю место");
      
      this.http.delete('http://localhost:3000/playingspaces',options)
          .subscribe((s)=>{console.log(s)
        });

    }catch(err){
      console.log(err);
    }
  }
}
