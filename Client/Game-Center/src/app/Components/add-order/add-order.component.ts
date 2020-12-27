import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client-list.service';
import { DeviceListService } from 'src/app/device-list.service';
import { OrderListService } from 'src/app/order-list.service';
import { Client } from '../client';
import { Device } from '../device';
import { User } from '../user';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    "date":new FormControl("",Validators.required),
    "client":new FormControl("",[Validators.required]),
    "device":new FormControl("",[Validators.required])
  });
  selectedDate!:Date;
  selectedClientId!:number;
  selectedDeviceId!:number;
  currentUserId!:number;
  devices:Device[]=[];
  clients:Client[]=[];
  user!:User;

  constructor(private service:OrderListService,private deviceService:DeviceListService,private clientService:ClientService) { }
  get date(){ return this.myForm.get('date');}
  get client(){ return this.myForm.get('client');}
  get device(){ return this.myForm.get('device');}
  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(console.log);
  }
  getDevice(){
    
    this.deviceService.getDevices().subscribe(
      result =>{
        result.forEach(device => {
          this.devices.push(device);
        });
      }
    );
  }
  getClient(){
    
    this.clientService.getClients().subscribe(
      result =>{
        result.forEach(client => {
          this.clients.push(client);
        });
      }
    );
  }
  getAdmin(){
    if(localStorage.getItem('user')!=null){
      let id=localStorage.getItem('user');
      this.currentUserId =Number(id);
    }
  }
  onNewDevice(){ 
    try{
      this.service.postOrder(this.selectedDate,this.selectedDeviceId,this.currentUserId,this.selectedClientId);
    }
    catch(err){
      console.log(err);
    }
  }
}
