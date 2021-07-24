import { Component } from '@angular/core';
import { CurrentOrder } from '../Models/currentOrder';
import { Pizza } from '../Models/pizza';
import { ManagerService } from '../Services/manager.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-current-order',
  templateUrl: 'current-order.page.html',
  styleUrls: ['current-order.page.scss']
})
export class CurrentOrderPage {

  currentOrder : CurrentOrder;

  constructor(private service : ManagerService, private router:Router, private alertController : AlertController) {
    this.currentOrder =null;
  }

  ionViewWillEnter() {
    this.currentOrder = this.service.GetCurrentOrder();
  }

  deletePizza(pizza: Pizza){
    this.service.RemovePizzaFromCurrentOrder(pizza);
    this.currentOrder = this.service.GetCurrentOrder();
  }

  async placeOrder(){
    if (this.currentOrder != null ){
      const alert = await this.alertController.create({
        cssClass: 'custom-alert',
        header: 'SUCCESS',
        subHeader: '',
        message: 'Order placed successfully.',
        buttons: ['OK']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);

      this.service.AddToOrderHistory();
      this.router.navigateByUrl("/manager");
    }
    
  }
}
