import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceListService } from 'src/app/device-list.service';
import { Device } from '../device';

@Component({
  selector: 'app-device-delete-request',
  templateUrl: './device-delete-request.component.html',
  styleUrls: ['./device-delete-request.component.css']
})
export class DeviceDeleteRequestComponent implements OnInit {
  @Input() deleteDevice!:Device;
  constructor(private http:HttpClient,private router:Router,private service:DeviceListService) { }

  ngOnInit(): void {
    console.log(this.deleteDevice);
  }
  OnClick():void{
    try{
      this.service.deleteDevice(this.deleteDevice.Id);
      
    }catch(err){
      console.log(err);
    }
  }
}
