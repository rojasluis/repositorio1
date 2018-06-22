import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { RADIO_CONTROL_VALUE_ACCESSOR } from 'ngx-bootstrap/buttons/button-radio.directive';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {

        if (JSON.parse(localStorage.getItem('isLoggedin'))){
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
