import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceListService } from 'src/app/device-list.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    "name":new FormControl("",Validators.required),
    "condition":new FormControl("",[Validators.required])
  });
  selectedValue!:boolean;

  constructor(private service:DeviceListService) { }
  get name(){ return this.myForm.get('name');}
  get phone(){ return this.myForm.get('condition');}
  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(console.log);
  }
  onNewDevice(){ 
    try{
      this.service.postDevice(this.myForm.get('name')?.value,this.selectedValue);
      console.log(this.selectedValue);
    }
    catch(err){
      console.log(err);
    }
  }
}
