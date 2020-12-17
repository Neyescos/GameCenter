import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client-list.service';
import { Client } from '../client';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  customers :Client[] =[];
  
  constructor(private service:ClientService,private router:Router) { }
  clearStorages(){
    sessionStorage.clear();
    localStorage.clear();
  }
  ngOnInit(): void {
    console.log("loaded");
    try{
      //const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
      this.service.getClients().subscribe(
        result =>{
          result.forEach(client => {
            this.customers.push(client);
            console.log(client);
          });
        }
      );
      
    }catch(err){
      
      this.router.navigateByUrl('/login');
      console.log('client-list error');
    }
  }
  
  
}
