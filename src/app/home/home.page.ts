import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ManagerService } from '../Services/manager.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public AvailableToppings :string[] = [ "Vegetables", "Meat balls", "Pepperoni", "Mushrooms" ];
  public AvailableSize : string[] = ["Large", "Medium", "Small", "Party" ];

  selectedQuantity : number;
  selectedTopping : string;
  selectedSize : string;

  constructor(private service: ManagerService, private alertController : AlertController) {
    this.resetSelection();
  }

  selectQuantity(quantity: number){
    console.log("select quantity: " + quantity);
    this.selectedQuantity = quantity;
  }

  selectTopping(topping : string){
    console.log("select topping: " + topping);
    this.selectedTopping = topping;
  }
  
  selectSize(size : string) {
    console.log("select size: " + size);
    this.selectedSize = size;
  }

  async AddPizza(){
    if (this.selectedQuantity == 0 || this.selectedSize == "" || this.selectedTopping == ""){
      const alert = await this.alertController.create({
        cssClass: 'custom-alert',
        header: '',
        subHeader: 'Incomplete Selection',
        message: 'Cannot add pizza with incomplete selections.',
        buttons: ['OK']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
    else {
        const alert = await this.alertController.create({
          cssClass: 'custom-alert',
          header: 'SUCCESS',
          subHeader: '',
          message: this.selectedQuantity + ' ' + this.selectedSize + ' pizza with ' + this.selectedTopping +  ' has been added to the cart.',
          buttons: ['OK']
        });
    
        await alert.present();
    
        const { role } = await alert.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);

      this.service.AddPizzaToCurrentOrder(this.selectedTopping, this.selectedSize, this.selectedQuantity);
    }
  }

  resetSelection(){
    this.selectedQuantity = 0;
    this.selectedSize = "";
    this.selectedTopping = "";
  }
}
