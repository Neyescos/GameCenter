import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthorizationServiceService } from 'src/app/authorization-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { HttpHeaders } from '@angular/common/http';
import{Router} from '@angular/router'
let correct=true;
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
  constructor(private service:AuthorizationServiceService,private router:Router) { }
  get username(){ return this.myForm.get('usernamename');}
  get password(){ return this.myForm.get('password');}
  ngOnInit(){
    
    console.log("Loaded");
    correct = true;
    
  }
  getCorrect():any{
    return correct;
  }
  
  onSubmit(){
    try{
      console.log(this.myForm.get('username')?.value);
      //const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
      this.service.login(this.myForm.get('username')?.value,this.myForm.get('password')?.value).subscribe(
        result =>{
          if(result.token!='Invalid values')
          localStorage.setItem('authorization',result.token);
          else{
            correct=false;
          }
        console.log(result.token);}
      );
      setTimeout(()=>{
        console.log('перевел');
        if(correct==true){
          this.router.navigateByUrl('/clients');
          correct=false;
        }
      },400);
    }catch{
      console.log('ошибка логина');
    }
  }
 
}
