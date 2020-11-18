import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import{User} from './user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game-Center';
  
  
}
