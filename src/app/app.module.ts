import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, RoutableComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DataService } from "./services/app.service";
import { OfferComponent } from "./offers/offers.component";
import { SlidePanelComponent } from './slide-panel/slide-panel.component';
import { CarouselComponent } from './home-page-carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OfferComponent,
    SlidePanelComponent,
    RoutableComponents,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
