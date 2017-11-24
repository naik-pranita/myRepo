import { Component, Input, OnInit } from "@angular/core";
import mockOffers from "../../../configuration/offers";
import { DataService } from "../services/app.service";


@Component({
    selector: 'offers-app',
    templateUrl: './offers.html',
    styleUrls: ['./offer.css']
})

export class OfferComponent implements OnInit {
    @Input() userInfo;
    private offers;

    constructor(private dataService: DataService) {
        this.offers = mockOffers["default"];
    }

    ngOnInit(): void {
        this.dataService.getUserInfo().then(userinfo => {
            this.showOffer(userinfo);
        });

    }

    private showOffer(userinfo) {
        console.log(userinfo);
        if (userinfo.displayName) {
            this.offers = mockOffers[userinfo.displayName];
        }
    }
}