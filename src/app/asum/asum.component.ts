import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/app.service";

@Component({
    selector: 'asum',
    templateUrl: 'asum.html',
    styleUrls: ['./asum.css']
})

export class ASUMComponent implements OnInit {
    constructor(private dataService: DataService) { }

    userInfo;
    ngOnInit() {
        this.userInfo = this.dataService.getUserInfo();
     }
}