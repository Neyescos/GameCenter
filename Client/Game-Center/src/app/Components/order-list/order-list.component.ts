import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderListService } from 'src/app/order-list.service';
import { Order } from '../Order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders :Order[] =[];
  
  constructor(private service:OrderListService,private router:Router) { }
  clearStorages(){
    sessionStorage.clear();
    localStorage.clear();
  }
  ngOnInit(): void {
    console.log("loaded");
    try{
      //const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
      this.service.getOrders().subscribe(
        result =>{
          result.forEach(Order => {
            this.orders.push(Order);
            console.log(Order);
          });
        }
      );
      
    }catch(err){
      
      this.router.navigateByUrl('/login');
      console.log('Order-list error');
    }
  }
  

}
