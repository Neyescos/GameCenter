import { Component, Input, OnInit } from '@angular/core';
import { DeviceListService } from 'src/app/device-list.service';
import { PlayngSpaceListService } from 'src/app/playng-space-list.service';
import { DeviceComponent } from '../device/device.component';
import { PlayingSpace } from '../playingSpace';
import { Device } from '../device';

@Component({
  selector: 'app-playing-space',
  templateUrl: './playing-space.component.html',
  styleUrls: ['./playing-space.component.css']
})
export class PlayingSpaceComponent implements OnInit {

  @Input() space!:PlayingSpace;
  devices: Device[]=[];
  
  constructor(private deviceService:DeviceListService) { }
  getDevice(){
    
    this.deviceService.getDevices().subscribe(
      result =>{
        result.forEach(device => {
          if(device.Id==this.space.Gaming_DeviceId){
          this.devices.push(device);
          }
        });
      }
    );
    console.log(this.space.Gaming_DeviceId);
  }
  
  ngOnInit(): void {
    console.log(this.space);
    this.getDevice();
    console.log(this.devices);

  }

}
