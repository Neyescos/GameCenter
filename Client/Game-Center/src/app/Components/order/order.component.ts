import { Component, Input, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { combineAll } from 'rxjs/operators';
import { ClientService } from 'src/app/client-list.service';
import { DeviceListService } from 'src/app/device-list.service';
import { UserListService } from 'src/app/user-list.service';
import { Client } from '../client';
import { Device } from '../device';
import { Order } from '../Order';
import { User } from '../user';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order!:Order;

  devices: Device[]=[];
  clients: Client[]=[];
  users: User[]=[];
  user!:User;
  constructor(private deviceService:DeviceListService,private clientService:ClientService,private userService:UserListService) { }
  getDevice(){
    
    this.deviceService.getDevices().subscribe(
      result =>{
        result.forEach(device => {
          if(device.Id==this.order.Ordered_DeviceId){
          this.devices.push(device);
          }
          //console.log(device);
        });
      }
    );
    
  }
  getClient(){
    
    this.clientService.getClients().subscribe(
      result =>{
        result.forEach(client => {
          if(client.Id==this.order.Current_CustomerId){
          this.clients.push(client);
          }
          
        });
      }
    );
    
  }
  getAdmin(){
    try{
      this.userService.getUsers().subscribe(
        result =>{
          result.forEach(user=>{
            if(user.Id==this.order.AdminId){
              this.user=user;
              this.users.push(user);
            }
            
          });
          }
        );


    }catch(err){
      console.log(err);
    }
    
  }
  getDate():string{
    let date = new Date(this.order.date);
    return `${date.getDate()}-${date.getMonth()}-${date.getUTCFullYear()}`;
  }
  ngOnInit(): void {
    
    console.log(this.order);
    this.getClient();
    this.getAdmin();
    this.getDevice();
    console.log(this.devices);
    console.log(this.users);
  }

}
