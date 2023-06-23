import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryViewComponent } from './inventory-view/inventory-view.component';
import { HomeComponent } from './home.component';
import { UserComponent } from './userlisting/userlisting.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AuthGuard } from '../_helper/auth.guard';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';

const routes: Routes = [
  { path: 'inventory-view', component: InventoryViewComponent },
  { path: 'add-car', component: AddCarComponent },
  {component:UserComponent,path:'user',canActivate:[AuthGuard]},
  {path:'manage_customer', component:AddcustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
