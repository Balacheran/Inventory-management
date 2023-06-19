import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { InventoryViewComponent } from './inventory-view.component';

@NgModule({
  declarations: [
    InventoryViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Add FormsModule here
  ],
})
export class InventoryViewModule { }