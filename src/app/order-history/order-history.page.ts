import { Component } from '@angular/core';
import { ManagerService } from '../Services/manager.service';
import { OrderHistory } from '../Models/orderHistory';

@Component({
  selector: 'app-order-history',
  templateUrl: 'order-history.page.html',
  styleUrls: ['order-history.page.scss']
})
export class OrderHistoryPage {
  orderHistoryList : OrderHistory[];
  constructor(private service : ManagerService) {
    this.orderHistoryList = [];
  }

  ionViewWillEnter() {
    this.orderHistoryList = this.service.GetOrderHistory();
  }

}
