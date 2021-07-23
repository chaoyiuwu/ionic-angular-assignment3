import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pizza } from '../Models/pizza';
import { CurrentOrder } from "../Models/currentOrder";
import { OrderHistory } from '../Models/orderHistory';
import { CurrentOrderPage } from '../current-order/current-order.page';
  
  @Injectable({
    providedIn: 'root'
  })
  export class ManagerService {
    private CurrentOrder : CurrentOrder;
    private OrderHistory : OrderHistory[];

    constructor() {
      this.CurrentOrder = new CurrentOrder();
    }

    public AddPizzaToCurrentOrder(topping : string, size : string, quantity: number){
      this.CurrentOrder.AddPizza(new Pizza(topping, size, quantity));
      // debug
      console.log(this.CurrentOrder.orderedPizza);
    }

    public GetCurrentOrder() : CurrentOrder {
      return this.CurrentOrder;
    }

    public GetOrderHistory() : OrderHistory[]{
      return this.OrderHistory;
    }
  }