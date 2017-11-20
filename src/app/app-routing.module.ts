import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { OnboardComponent } from "./onboard/onboard.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'onboard',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'onboard',
    component: OnboardComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
