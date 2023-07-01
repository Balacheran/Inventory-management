import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginpopupComponent } from '../loginpopup/loginpopup.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService, private dialog: MatDialog) {
      sessionStorage.clear();
  }
  Login() {
    this.OpenDialog('600ms', '600ms');
  }

  OpenDialog(enteranimation: any, exitanimation: any) {
    const popup = this.dialog.open(LoginpopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '30.5%',
    });
  }

  registerform = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isactive: this.builder.control(false)
  });
  proceedregister() {
    if (this.registerform.valid) {
      this.service.RegisterUser(this.registerform.value).subscribe(result => {
        this.toastr.success('Please contact admin for enable access.','Registered successfully')
        this.dialog.closeAll();
        this.Login();
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }

}
