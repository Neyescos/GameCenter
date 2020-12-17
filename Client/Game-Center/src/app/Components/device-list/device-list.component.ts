import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceListService } from 'src/app/device-list.service';
import { Device } from '../device';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  devices:Device[] = [];
  constructor(private service:DeviceListService,private router:Router) { }
  clearStorages(){
    sessionStorage.clear();
    localStorage.clear();
  }
  ngOnInit(): void {
    console.log("loaded");
    try{
      //const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
      this.service.getDevices().subscribe(
        result =>{
          result.forEach(device => {
            this.devices.push(device);
            console.log(device);
          });
        }
      );
      
    }catch(err){
      
      this.router.navigateByUrl('/login');
      console.log('client-list error');
    }
  }

}
