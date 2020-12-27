import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    "client":new FormControl("",[Validators.required]),
    "device":new FormControl("",[Validators.required])
  });
  MyDate = new Date();
  date = new FormControl();
  validationError!:string;
  selectedDate!:string;
  selectedClientId!:number;
  selectedDeviceId!:number;
  currentUserId!:string;
  devices:Device[]=[];
  clients:Client[]=[];
  user!:User;

  constructor(private service:OrderListService,private deviceService:DeviceListService,private clientService:ClientService,private router:Router) { }
  get client(){ return this.myForm.get('client');}
  get device(){ return this.myForm.get('device');}
  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(console.log);
    this.getDevice();
    this.getClient();
    this.getAdmin();
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
    try{
      this.currentUserId=localStorage.getItem('UserId')||'';
    }
    catch(err){
      console.log(err);
    }
    
  }
  onNewDevice(){ 
    try{
      this.MyDate= this.date.value;
      console.log(this.MyDate.getDate()+'/'+this.MyDate.getMonth()+'/'+this.MyDate.getFullYear());
      if(this.selectedDeviceId==null || this.date.value==null||this.selectedClientId==null){
        this.validationError="error";
      }
      else{
        
        console.log(this.MyDate.getDate()+'/'+this.MyDate.getMonth()+'/'+this.MyDate.getFullYear(),this.selectedDeviceId,this.currentUserId,this.selectedClientId);
        this.service.postOrder(this.MyDate.getMonth()+'-'+this.MyDate.getDate()+'-'+this.MyDate.getFullYear(),this.selectedDeviceId,this.currentUserId,this.selectedClientId);
        this.router.navigateByUrl('/orders');
      }
    }
    catch(err){
      console.log(err);
    }
  }
}
