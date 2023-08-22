import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { AuthService } from 'src/app/service/auth.service';
import { AddCustComponent } from '../add-cust/add-cust.component';
import { CardetailComponent } from '../cardetail/cardetail.component';
import axios from 'axios';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {
  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["code", "name", "email", "phone", "status", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: AuthService, private dialog: MatDialog) {
    this.loadcustomer();
  }

  loadcustomer() {
    this.service.GetCustomerdetails().subscribe(res => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource<Customer>(this.customerlist);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editcustomer(code: any) {
    this.Openpopup(code, 'Edit Customer',AddCustComponent);
  }

  detailcustomer(code: any) {
    this.Openpopup(code, 'Customer Detail',CardetailComponent);
  }
  deleteCust = async (carId: number) => {
    try {
<<<<<<< Updated upstream
      const response = await axios.delete(`http://localhost:3000/customer/${carId}`);
=======
      const response = await axios.delete(`https://9a7e42f03e2b-698981503777300233.ngrok-free.app/customer/${carId}`);
>>>>>>> Stashed changes
      console.log(response.data); // Optional: Log the response data
      this.loadcustomer();
    } catch (error) {
      console.error(error);
    }
  };
  

  addcustomer(){
    this.Openpopup(0, 'Add Customer',AddCustComponent);
  }

  Openpopup(code: any, title: any,component:any) {
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

}
