import { Component } from "@angular/core";
import { Routes, RouterModule, Router } from '@angular/router';
import { DataService } from "../services/app.service";

@Component({
    selector: 'onboard-app',
    templateUrl: './onboard.html',
    styleUrls: ['./css/onboard.css','./css/form-elements.css']
})

export class OnboardComponent {

    constructor(private router: Router, private dataService: DataService) {}

    onboardUser(form) {
        this.dataService.saveUserInfo(form);
        this.router.navigate(['accountSummary'])
    }
}