import axios from 'axios';
import { Component, DoCheck, ViewChild } from '@angular/core';
import { AddCarComponent } from '../add-car/add-car.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { Car } from 'src/app/Model/Customer';
import { CardetailComponent } from '../cardetail/cardetail.component';


@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.css']
})
export class InventoryViewComponent implements DoCheck {
  isadminuser = false;
  carlist !: Car[];
  dataSource: any;
  displayedColumns: string[] = ["code", "bname", "mname", "email", "phone", "status", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;


  constructor(private service: AuthService, private dialog: MatDialog) {
    this.loadcustomer();
  }
  ngDoCheck(): void {
    let role = sessionStorage.getItem('role');
    if (role == 'admin') {
      this.isadminuser = true;
    } else {
      this.isadminuser = false;
    }
  }

  loadcustomer() {
    this.service.GetCustomer().subscribe(res => {
      this.carlist = res;
      this.dataSource = new MatTableDataSource<Car>(this.carlist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editcustomer(code: any) {
    this.Openpopup(code, 'Edit Customer', AddCarComponent);
  }

  detailcustomer(code: any) {
    this.Openpopup(code, 'Customer Detail', CardetailComponent);
  }



  addcustomer() {
    this.Openpopup(0, 'Add Customer', AddCarComponent);
  }

  Openpopup(code: any, title: any, component: any) {
    var _popup = this.dialog.open(component, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      // console.log(item)
      this.loadcustomer();
    })
  }
  deleteCar = async (carId: number) => {
    try {
      const response = await axios.delete(`https://9a7e42f03e2b-698981503777300233.ngrok-free.app/car/${carId}`);
      console.log(response.data); // Optional: Log the response data
      this.loadcustomer();
    } catch (error) {
      console.error(error);
    }
  };

}
   /*inventory: any[] = []; // Assuming your inventory is an array of objects
 // inventory = [
 //   { model: 'Car 1', price: 10000, status: 'In Sale' },
 //   { model: 'Car 2', price: 15000, status: 'Sold Out' },
 //   // Add more cars as needed
 // ];


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
}*/
