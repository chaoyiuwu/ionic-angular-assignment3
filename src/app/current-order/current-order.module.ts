import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrentOrderPage } from './current-order.page';

import { CurrentOrderPageRoutingModule } from './current-order-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CurrentOrderPageRoutingModule
  ],
  declarations: [CurrentOrderPage]
})
export class CurrentOrderPageModule {}
