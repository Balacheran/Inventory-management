import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryViewComponent } from './inventory-view/inventory-view.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: 'inventory-view', component: InventoryViewComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
