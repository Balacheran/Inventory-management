import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.css']
})
export class InventoryViewComponent {
  inventory: any[] = []; // Assuming your inventory is an array of objects

  // Function to retrieve inventory data (populate the 'inventory' array)
  getInventory(): void {
    // Replace this with your own implementation to fetch the inventory data
    // For example, you can fetch the data from a service or API
    this.inventory = [
      { model: 'Car 1', price: 10000, status: 'In Sale' },
      { model: 'Car 2', price: 15000, status: 'Sold Out' },
      // Add more cars as needed
    ];
  }
  ngOnInit(): void {
    this.getInventory(); // Call the function to retrieve inventory data when the component is initialized
  }
}
