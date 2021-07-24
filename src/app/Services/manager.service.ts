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
    private OrderHistoryList : OrderHistory[];

    constructor() {
      this.CurrentOrder = new CurrentOrder();
      this.OrderHistoryList = [];
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
      return this.OrderHistoryList;
    }

    public RemovePizzaFromCurrentOrder(pizza : Pizza){
      this.CurrentOrder.RemovePizza(pizza);
      // debug
      console.log(this.CurrentOrder.orderedPizza);
    }

    public AddToOrderHistory(){
      this.OrderHistoryList.push(new OrderHistory(this.CurrentOrder, "to add time"));
    }

    public ResetCurrentOrder(){
      this.CurrentOrder = null;
    }
  }