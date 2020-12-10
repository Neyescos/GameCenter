import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ClientService } from 'src/app/client-list.service';
import { Client } from '../client';
import{ClientListComponent}from '../client-list/client-list.component'
@Component({
  selector: 'app-client-delete-request',
  templateUrl: './client-delete-request.component.html',
  styleUrls: ['./client-delete-request.component.css']
})
export class ClientDeleteRequestComponent implements OnInit {
  @Input() deleteclient!:Client;
  constructor(private http:HttpClient,private router:Router,private service:ClientService) { }

  ngOnInit(): void {
    console.log(this.deleteclient);
  }
  OnClick():void{
    try{
      this.service.deleteClient(this.deleteclient.Id);
      
    }catch(err){
      console.log(err);
    }
  }
}
