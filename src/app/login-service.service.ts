import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
// import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import  {CREDENTIALS, USERCREDENTIALS}  from '../assets/login-credentails'

interface result {
    status: boolean,
    message: string,
    role: string
}

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    private forms=[];
    private value=[];
    cred = CREDENTIALS;
    userCred = USERCREDENTIALS;
    msg : result = {
        status : false,
        message: '',
        role: ''
    }
    model: any;
    key = environment.encryptKey ;


    constructor() { }



    loginCheck(encryModel : any ){
        this.model = {
            name : encryModel.name,
            password: encryModel.password
        }     
        if(this.model.name == '' || this.model.name == undefined){
            this.msg.status = false;
            this.msg.message = "User name is required";
            this.msg.role = "";
        }
        else if(this.model.name == this.cred.name && this.model.password == this.cred.password){
            this.msg.status = true;
            this.msg.message = "Welcome Home Chief";
            this.msg.role = "admin";
        }
        else if(this.model.name == this.userCred.name && this.model.password == this.userCred.password){
            this.msg.status = true;
            this.msg.message = "Welcome User";
            this.msg.role = "user";
        }
        else if(this.model.password == '' || this.model.password == undefined ){
            this.msg.status = false;
            this.msg.message = "User password is required";
            this.msg.role = "";
        }

        else if(this.model.name != this.cred.name   || this.model.password != this.cred.password){
            this.msg.status = false;
            this.msg.message = "Invalid credentials";
            this.msg.role = "";
        }

        return this.msg;

    }


}