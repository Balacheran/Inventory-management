import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface Car {
  model: string;
  price: number;
  status: string;
}

interface Order {
  user: string;
  car: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  role:any;
  Company_name = 'B5 Car Dealership';
  constructor(
    private route:Router,private toastrService: ToastrService
  ) { }
  
 
  onClickIV(){
    this.route.navigate(['/home/inventory-view'])
  }
  onClickCard () {
    this.route.navigate(['/pages/card'])
  }
  logout() {
		localStorage.removeItem('loggedIn');
    this.route.navigate(['']);
		// window.location.reload();
    if(localStorage.getItem('role')=='admin'){
      this.toastrService.info('Logout Successfully...', 'Administrator');
    }
    if(localStorage.getItem('role')=='user'){
    this.toastrService.info('Logout Successfully...','User');
    }
	}
  inventory: Car[] = [
    { model: 'Car 1', price: 10000, status: 'In Sale' },
    { model: 'Car 2', price: 15000, status: 'Sold Out' },
    { model: 'Car 3', price: 20000, status: 'In Sale' }
  ];

  orders: Order[] = [
    { user: 'User 1', car: 'Car 4' },
    { user: 'User 2', car: 'Car 5' }
  ];

  newCar: Car = {
    model: '',
    price: 0,
    status: 'In Sale'
  };

  resellingCar: Car = {
    model: '',
    price: 0,
    status: 'Reselling'
  };

  approveOrder(order: Order): void {
    // Add the ordered car to the inventory
    const newCar: Car = {
      model: order.car,
      price: 0,
      status: 'In Sale'
    };
    this.inventory.push(newCar);

    // Remove the order from the orders list
    const index = this.orders.indexOf(order);
    this.orders.splice(index, 1);
  }

  addCar(): void {
    // Add a new car to the inventory
    const newCar: Car = {
      model: this.newCar.model,
      price: this.newCar.price,
      status: 'In Sale'
    };
    this.inventory.push(newCar);

    // Reset the form
    this.newCar.model = '';
    this.newCar.price = 0;
  }

  resellCar(): void {
    // Add the reselling car to the inventory
    const newCar: Car = {
      model: this.resellingCar.model,
      price: this.resellingCar.price,
      status: 'In Sale'
    };
    this.inventory.push(newCar);

    // Reset the form
    this.resellingCar.model = '';
    this.resellingCar.price = 0;
  }

}
