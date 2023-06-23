import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router) {
    sessionStorage.clear();

  }
  ngOnInit(): void {

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
  /*model: any = {
    title: '',
    name: '',
    password: ''
  };
  name:any;
  returnUrl: String = '';
  userName: any;
  password: any;
  cred = CREDENTIALS;
  key =  environment.encryptKey
  @ViewChild('f',{static: true}) f!: NgForm;

  constructor(
    private loginservice: LoginService,
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) { 
    if(localStorage.getItem('loggedIn')){
      this.router.navigate(['/home'])
    }

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params:any) => {
      this.returnUrl = params.returnUrl
    }
  );


  }
  onSubmit() {
  var key = CryptoJS.enc.Utf8.parse(this.key);
  var iv = CryptoJS.enc.Utf8.parse(this.key);
  var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(this.model.password.toString()), this.key,
  {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });
  var encryPassword = encrypted.toString();

    var data = {
      name : this.model.name,
      password: encryPassword
    }
    console.log(data)
    var response:any = this.loginservice.loginCheck(this.model);
    console.log(response);
    localStorage.setItem('loggedIn', response.status);
    localStorage.setItem('role', response.role);
    if(response.status){
          // localStorage.setItem('loggedIn', response.status);
           this.router.navigate(['/home']);
          this.toastr.success(response.message);
        }
    else{
      this.toastr.error(response.message);

    }
  }*/

}
