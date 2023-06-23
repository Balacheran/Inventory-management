import { Component,OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})

  export class CardetailComponent implements OnInit {

    inputdata: any;
    custdata: any;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<CardetailComponent>,
      private service: AuthService) {
  
  
    }
    ngOnInit(): void {
      this.inputdata = this.data;
      if (this.inputdata.code > 0) {
        this.service.GetCustomerbycode(this.inputdata.code).subscribe(item => {
  
          this.custdata = item;
        });
      }
    }
  
    closepopup(){
      this.ref.close('closing from detail');
    }
  
  
  }
  

