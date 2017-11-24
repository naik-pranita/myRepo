import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../services/app.service";


@Component({
    selector: 'home-app',
    templateUrl: './home.html',
    styleUrls: ['./home.css', './css/form-elements.css']
})

export class HomeComponent {
    constructor(private dataService: DataService, private router: Router) { }

    login(form) {
        this.dataService.saveUserInfo(form);
        this.router.navigate(['accountSummary']);
    }
}