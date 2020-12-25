import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceListService } from 'src/app/device-list.service';
import { PlayngSpaceListService } from 'src/app/playng-space-list.service';
import { Device } from '../device';

@Component({
  selector: 'app-add-playing-space',
  templateUrl: './add-playing-space.component.html',
  styleUrls: ['./add-playing-space.component.css']
})
export class AddPlayingSpaceComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    "DeviceId":new FormControl("",Validators.required),
    "IsEmpty":new FormControl("",[Validators.required])
  });
  selectedState!:boolean;
  selectedDeviceId!:number;

  constructor(private service:PlayngSpaceListService,private deviceService:DeviceListService) { }
  get DeviceId(){ return this.myForm.get('DeviceId');}
  get IsEmpty(){ return this.myForm.get('IsEmpty');}
  devices:Device[]=[];
  getDevice(){
    
    this.deviceService.getDevices().subscribe(
      result =>{
        result.forEach(device => {
          this.devices.push(device);
        });
      }
    );
  }
  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(console.log);
    this.getDevice();
  }
  onNewSpace(){ 
    try{
      this.service.postSpace(this.selectedDeviceId,this.selectedState);
      console.log("Device ID"+this.selectedDeviceId);
      console.log(this.selectedState);
    }
    catch(err){
      console.log(err);
    }
  }

}
