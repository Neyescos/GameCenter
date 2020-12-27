import { Component, Input, OnInit } from '@angular/core';
import { OrderListService } from 'src/app/order-list.service';
import { Order } from '../Order';

@Component({
  selector: 'app-order-delete-request',
  templateUrl: './order-delete-request.component.html',
  styleUrls: ['./order-delete-request.component.css']
})
export class OrderDeleteRequestComponent implements OnInit {
  @Input() deleteOrder!:Order;
  constructor(private service:OrderListService) { }
  OnClick():void{
    try{
      this.service.deleteOrder(this.deleteOrder.Id);
      
    }catch(err){
      console.log(err);
    }
  }
  ngOnInit(): void {
  }

}
