import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthorizationServiceService } from 'src/app/authorization-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    "username":new FormControl("",Validators.required),
    "password":new FormControl("",[Validators.required])
  });

  constructor(private service:AuthorizationServiceService) { }

  ngOnInit(){
    console.log("Loaded");
  }
  onSubmit(){
    try{
      console.log(this.myForm.get('username')?.value);
      //const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
      let myToken;
      this.service.login(this.myForm.get('username')?.value,this.myForm.get('password')?.value).subscribe(
        result =>{sessionStorage.setItem('authorization',result.token);
        
        console.log(result.token);}
      );
    }catch{
      console.log('ошибка логина');
    }
  }
 
}
