import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {
  bookings = [];
  constructor(public authService: AuthService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUserBookings(this.authService.currentUser._id).subscribe((response: any) => {
      this.bookings = response.data;
    })
  }

  getMonth(date) {
    console.log(date);
    console.log(new Date(date));
    date = new Date(date);
    const month = date.toLocaleString('default', { month: 'long' });
    return month;
  }

  getDate(date) {
    return new Date(date).getDate();
  }

}
