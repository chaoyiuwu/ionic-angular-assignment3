import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderHistoryPage } from './order-history.page';

import { OrderHistoryPageRoutingModule } from './order-history-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: OrderHistoryPage }]),
    OrderHistoryPageRoutingModule,
  ],
  declarations: [OrderHistoryPage]
})
export class OrderHistoryPageModule {}
