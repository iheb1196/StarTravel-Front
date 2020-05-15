import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../../app/services/api.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {


  bookings = [];
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getBookings().subscribe((response: any) => {
      this.bookings = response.data;
    });
  }
  edit(id, status) {
    this.apiService.editBooking({ id, status }).subscribe((response: any) => {
      this.ngOnInit();
    });
  }
}
