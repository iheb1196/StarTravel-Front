import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { AdminComponent } from './admin/admin.component';
import { AirportsComponent } from './admin/airports/airports.component';
import { UsersComponent } from './admin/users/users.component';
import { FlightsComponent } from './admin/flights/flights.component';
import { FlightComponent } from './flight/flight.component';
import { BookingsComponent } from './admin/bookings/bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    LoginpageComponent,
    SignuppageComponent,

    AccountpageComponent,
  
    AdminComponent,


    AirportsComponent,

    UsersComponent,

    FlightsComponent,

    FlightComponent,

    BookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
