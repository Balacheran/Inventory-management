import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryViewComponent } from './inventory-view/inventory-view.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UserComponent } from './userlisting/userlisting.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { MaterialModule } from 'src/material.module';
import { CardetailComponent } from './cardetail/cardetail.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddCustComponent } from './add-cust/add-cust.component';





@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    InventoryViewComponent,
    AddCarComponent,
    UserComponent,
    UpdatepopupComponent,
    CardetailComponent,
    AddcustomerComponent,
    AddCustComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

  ],

})
export class HomeModule { }
