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

  ngOnInit(){
    console.log("Loaded");
  }
  getCorrect():any{
    return correct;
  }
  onSubmit(){
    try{
      console.log(this.myForm.get('username')?.value);
      //const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
      let myToken;
      this.service.login(this.myForm.get('username')?.value,this.myForm.get('password')?.value).subscribe(
        result =>{
          if(result.token!='Invalid values')
          localStorage.setItem('authorization',result.token);
          else{
            correct=false;
          }
        console.log(result.token);}
      );
      if(correct==true){
        this.onCorrect();
        correct=false;
      }
    }catch{
      console.log('ошибка логина');
    }
  }
  onCorrect(){
    this.router.navigateByUrl('/users');
  }
}
