import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { OnboardComponent } from "./onboard/onboard.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ASUMComponent } from "./asum/asum.component";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: 'onboard',
    component: OnboardComponent,
    children: []
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
    children: []
  },
  {
    path: 'accountSummary',
    component: ASUMComponent,
    // canActivate: [AuthGuard],
    children: []
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
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
  ASUMComponent,
  ForgotPasswordComponent
]

