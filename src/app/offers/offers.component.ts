import { Component } from "@angular/core";
import mockOffers from "../../../configuration/offers";


@Component({
    selector: 'offers-app',
    templateUrl: './offers.html',
    styleUrls: ['./offer.css']
})

export class OfferComponent {
    private offers;

    constructor() {
        this. offers = mockOffers["default"];
    }
}