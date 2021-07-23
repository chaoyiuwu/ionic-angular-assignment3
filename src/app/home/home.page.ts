import { Component } from '@angular/core';
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

  constructor(private ManagerService: ManagerService) {
    this.selectedQuantity = 0;
    this.selectedSize = "";
    this.selectedTopping = "";
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

  AddPizza(){
    // probably need to call the service here
    if (this.selectedQuantity == 0 || this.selectedSize == "" || this.selectedTopping == ""){
      console.log("Cannot add");
    }
    else {
      this.ManagerService.AddPizzaToCurrentOrder(this.selectedTopping, this.selectedSize, this.selectedQuantity);
    }

  }

}