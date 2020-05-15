import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

import { AuthGuard } from './auth.guard';
import { AccountpageComponent } from './accountpage/accountpage.component';

import { AdminComponent } from './admin/admin.component';
import { AirportsComponent } from './admin/airports/airports.component';
import { UsersComponent } from './admin/users/users.component';
import { FlightsComponent } from './admin/flights/flights.component';
import { FlightComponent } from './flight/flight.component';
import { BookingsComponent } from './admin/bookings/bookings.component';



const routes: Routes = [
  
  { path: 'home', component: HomepageComponent },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'bookings', component: BookingsComponent },
      { path: 'airports', component: AirportsComponent },
      { path: 'flights', component: FlightsComponent },
      { path: 'users', component: UsersComponent },

      { path: '**', redirectTo: 'flights' }
    ]
  },
  { path: 'login', component: LoginpageComponent },
  { path: 'flight/:id', component: FlightComponent },
  { path: 'signup', component: SignuppageComponent },
  {
    path: 'myaccount', component: AccountpageComponent
  },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
