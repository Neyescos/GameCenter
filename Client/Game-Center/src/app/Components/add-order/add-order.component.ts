import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client-list.service';
import { DeviceListService } from 'src/app/device-list.service';
import { OrderListService } from 'src/app/order-list.service';

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
  selectedValue!:boolean;

  constructor(private service:OrderListService,private deviceService:DeviceListService,private clientService:ClientService) { }
  get date(){ return this.myForm.get('date');}
  get client(){ return this.myForm.get('client');}
  get device(){ return this.myForm.get('device');}
  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(console.log);
  }
  onNewDevice(){ 
    try{
      //this.service.postOrder(this.myForm.get('date')?.value,this.selectedValue);
      console.log(this.selectedValue);
    }
    catch(err){
      console.log(err);
    }
  }
}
