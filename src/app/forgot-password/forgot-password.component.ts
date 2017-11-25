import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'forgot-password',
    templateUrl: 'forgot-password.html',
    styleUrls: ['./forgot-password.css']
})

export class ForgotPasswordComponent implements OnInit {

    isLeftVisible = 'left';

    constructor(private router: Router) { }

    ngOnInit() { }

    validateOTP(formValues) {
        if(formValues.otp === '999999') {
            this.router.navigate(['accountSummary']);
        }else {
            this.router.navigate(['home']);
        }
        
    }
}