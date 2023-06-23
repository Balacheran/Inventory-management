import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-cust',
  templateUrl: './add-cust.component.html',
  styleUrls: ['./add-cust.component.css']
})
export class AddCustComponent implements OnInit {
  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<AddCustComponent>, private buildr: FormBuilder,
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
      this.myform.setValue({name:this.editdata.name,email:this.editdata.email,phone:this.editdata.phone,
      status:this.editdata.status})
    });
  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  myform = this.buildr.group({
    name: this.buildr.control(''),
    email: this.buildr.control(''),
    phone: this.buildr.control(''),
    status: this.buildr.control(true)
  });

  Saveuser() {
    this.service.Savecustomerdata(this.myform.value).subscribe(res => {
      this.closepopup();
    });
  }
}
