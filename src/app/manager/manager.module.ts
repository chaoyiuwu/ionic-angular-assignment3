import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagerPage } from './manager.page';

import { ManagerPageRoutingModule } from './manager.routing.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ManagerPageRoutingModule
  ],
   declarations: [ManagerPage]
})
export class ManagerModule { }
