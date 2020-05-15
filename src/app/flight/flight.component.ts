import { Component, OnInit } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  id;
  flight;

  bookingForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.bookingForm = new FormGroup({
      client: new FormControl(this.authService.currentUser._id),
      flight: new FormControl(this.id),
      numberOfPassagers: new FormControl(1),
      description: new FormControl(''),
      phone: new FormControl(''),
      checkInDate: new FormControl(''),
      paymentMethod: new FormControl(''),
    })
    this.apiService.getFlight(this.id).subscribe((response: any) => {
      this.flight = response.data;
    });
  }

  onSubmit() {
    this.apiService.addBooking(this.bookingForm.value).subscribe((response: any) => {
      this.router.navigateByUrl('/home');
    });
  }
}
