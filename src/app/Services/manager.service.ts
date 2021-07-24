import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Pizza } from '../Models/pizza';
import { CurrentOrder } from "../Models/currentOrder";
import { OrderHistory } from '../Models/orderHistory';
  
  @Injectable({
    providedIn: 'root'
  })
  export class ManagerService {
    private currentOrder : CurrentOrder;
    private orderHistoryList : OrderHistory[];

    pipe: DatePipe;
    constructor() {
      this.currentOrder = null;
      this.orderHistoryList = [];
    }

    public AddPizzaToCurrentOrder(topping : string, size : string, quantity: number){
      if (this.currentOrder == null){
        this.currentOrder = new CurrentOrder();
      }
      this.currentOrder.AddPizza(new Pizza(topping, size, quantity));
      // debug
      console.log(this.currentOrder.orderedPizza);
    }

    public GetCurrentOrder() : CurrentOrder {
      return this.currentOrder;
    }

    public GetOrderHistory() : OrderHistory[]{
      return this.orderHistoryList;
    }

    public RemovePizzaFromCurrentOrder(pizza : Pizza){
      this.currentOrder.RemovePizza(pizza);

      // debug
      console.log(this.currentOrder.orderedPizza);

      if (this.currentOrder.orderedPizza.length == 0) {
        this.ResetCurrentOrder();
      }
    }

    public AddToOrderHistory(){
      this.pipe= new DatePipe('en-US');
      const now = Date.now();
      const formattedDate = this.pipe.transform(now, 'short');  
      this.orderHistoryList.push(new OrderHistory(this.currentOrder, formattedDate));
      this.ResetCurrentOrder();
    }

    public ResetCurrentOrder(){
      this.currentOrder = null;
    }
  }