import { Component } from '@angular/core';
import { CurrentOrder } from '../Models/currentOrder';
import { Pizza } from '../Models/pizza';
import { ManagerService } from '../Services/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-order',
  templateUrl: 'current-order.page.html',
  styleUrls: ['current-order.page.scss']
})
export class CurrentOrderPage {

  currentOrder : CurrentOrder;

  constructor(private service : ManagerService, private router:Router) {
    this.currentOrder =null;
  }

  ionViewWillEnter() {
    this.currentOrder = this.service.GetCurrentOrder();
  }

  deletePizza(pizza: Pizza){
    this.service.RemovePizzaFromCurrentOrder(pizza);
    this.currentOrder = this.service.GetCurrentOrder();
  }

  placeOrder(){
    if (this.currentOrder != null ){
      this.service.AddToOrderHistory();
      this.router.navigateByUrl("/manager");
    }
    
  }
}
