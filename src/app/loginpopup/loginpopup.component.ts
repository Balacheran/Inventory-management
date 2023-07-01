import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-loginpopup',
  templateUrl: './loginpopup.component.html',
  styleUrls: ['./loginpopup.component.css']
})
export class LoginpopupComponent implements OnInit {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router, private dialog: MatDialog) {
    sessionStorage.clear();

  }
  ngOnInit(): void {

  }
  Register() {
    this.OpenDialog('600ms', '600ms');
  }

  OpenDialog(enteranimation: any, exitanimation: any) {
    const popup = this.dialog.open(RegisterComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '30%',
    });
  }
  result: any;
  response : any;
  loginform = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });
  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  proceedlogin() {
    if (this.loginform.valid) {
      this.service.GetUserbyCode(this.loginform.value.id).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginform.value.password) {
          if (this.result.isactive) {
            sessionStorage.setItem('username', this.result.id);
            sessionStorage.setItem('role', this.result.role);
            this.response=true;
            localStorage.setItem('loggedIn', this.response);
            this.router.navigate(['home']);
            if(sessionStorage.getItem('username')=='admin'){
              this.toastr.success('Login Successsfully..!','Administratior')
            }else{
              this.toastr.success('Login Successsfully..!',this.capitalizeFirstLetter(this.result.role))
            }
          } else {
            this.toastr.error('Please contact Admin', 'InActive User');
          }
        } else {
          this.toastr.error('Invalid credentials');
        }
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }

  }
}
