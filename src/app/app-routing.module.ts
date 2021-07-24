import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule)
  },
  {
    path: 'currentorder',
    loadChildren: () => import('./current-order/current-order.module').then(m => m.CurrentOrderPageModule)
  },
  {
    path: 'orderhistory',
    loadChildren:() => import('./order-history/order-history.module').then(m => m.OrderHistoryPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
