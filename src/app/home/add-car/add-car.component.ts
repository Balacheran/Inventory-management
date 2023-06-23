import { Component ,Inject,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit{
  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<AddCarComponent>, private buildr: FormBuilder,
    private service: AuthService) {

  }
  ngOnInit(): void {
    this.inputdata = this.data;
    if(this.inputdata.code>0){
      this.setpopupdata(this.inputdata.code)
    }
  }

  setpopupdata(code: any) {
    this.service.GetCustomerbycode(code).subscribe(item => {
      this.editdata = item;
      this.myform.setValue({bname:this.editdata.bname,mname:this.editdata.mname,condition:this.editdata.condition,price:this.editdata.price,
      status:this.editdata.status})
    });
  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  myform = this.buildr.group({
    bname: this.buildr.control(''),
    mname: this.buildr.control(''),
    condition: this.buildr.control(''),
    price: this.buildr.control(''),
    status: this.buildr.control('Sale In')
  });

  Saveuser() {
    this.service.Savecustomer(this.myform.value).subscribe(res => {
      this.closepopup();
    });
  }
}
