import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentOrderPage } from './current-order.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentOrderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentOrderPageRoutingModule {}
