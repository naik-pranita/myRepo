import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { OnboardComponent } from "./onboard/onboard.component";
import { ASUMComponent } from "./asum/asum.component";

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
        component: OnboardComponent
      }
    ]
  },
  {
    path: 'onboard',
    component: OnboardComponent,
    children: []
  },
  {
    path: 'accountSummary',
    component: ASUMComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const RoutableComponents = [
  HomeComponent,
  OnboardComponent,
  ASUMComponent
]

