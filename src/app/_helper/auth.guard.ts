import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    flag : any;
    constructor(
        private router: Router,
    ) {}

    canActivate() {
        this.flag = localStorage.getItem('loggedIn');
        if (this.flag == 'true' || this.flag == true) {
            return true;
        } else if(this.flag == null ){
            return false;
        }
        else {
            return false;
            // this.router.navigate(['']);
        }
    }
}