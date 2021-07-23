import { Component } from '@angular/core';
import { CurrentOrder } from '../Models/currentOrder';
import { ManagerService } from '../Services/manager.service';

@Component({
  selector: 'app-current-order',
  templateUrl: 'current-order.page.html',
  styleUrls: ['current-order.page.scss']
})
export class CurrentOrderPage {

  CurrentOrder : CurrentOrder;
  constructor(private ManagerService : ManagerService) {
    this.CurrentOrder = this.ManagerService.GetCurrentOrder();
  }

}
