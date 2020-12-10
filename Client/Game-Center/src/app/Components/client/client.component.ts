import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input() client!:Client;
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.client.Id);
    this.router.navigateByUrl('/clients');
  }

}
