import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../Services/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: 'manager.page.html',
  styleUrls: ['manager.page.scss']
})
export class ManagerPage {

  constructor(private router : Router, private service : ManagerService) {

  }

  ToNewOrderPage(){
    this.service.ResetCurrentOrder();
    this.router.navigateByUrl('home');
  }


}
