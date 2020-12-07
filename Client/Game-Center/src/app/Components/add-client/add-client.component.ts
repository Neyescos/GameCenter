import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/client-list.service';
import { ClientListComponent } from '../client-list/client-list.component';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    "name":new FormControl("",Validators.required),
    "phone":new FormControl("",[Validators.required,Validators.pattern("(375)[0-9]{9}")])
  });
  constructor(private service:ClientService) { }
  get name(){ return this.myForm.get('name');}
  get phone(){ return this.myForm.get('phone');}
  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(console.log);
  }
  onNewCustomer(){ 
    try{
      this.service.postClient(this.myForm.get('name')?.value,this.myForm.get('phone')?.value);
    }
    catch(err){
      console.log(err);
    }
  }
}
