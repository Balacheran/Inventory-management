<<<<<<< Updated upstream
import { Component, OnInit, ViewChild  } from '@angular/core';
import { LoginService } from './login-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import  {CREDENTIALS}  from '../assets/login-credentails'
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { environment } from '../environments/environment';
import * as CryptoJS from 'crypto-js';
=======
import { Component  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< Updated upstream
export class AppComponent implements OnInit {
  title = 'inventory';
  model: any = {
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
  }
=======
export class AppComponent {
  title = 'inventory';
  
  /*constructor(private toastrService: ToastrService) {
  }

  public showSuccess(): void {
    this.toastrService.success('Message Success!', 'Title Success!');
  }

  public showInfo(): void {
    this.toastrService.info('Message Info!', 'Title Info!');
  }

  public showWarning(): void {
    this.toastrService.warning('Message Warning!', 'Title Warning!');
  }

  public showError(): void {
    this.toastrService.error('Message Error!', 'Title Error!');
  }*/
>>>>>>> Stashed changes
}