import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flightForm: FormGroup;
  selectedFlight;
  flights = [];
  airports = [];
  constructor(private apiService: ApiService) {
    this.flightForm = new FormGroup({
      dep: new FormControl(),
      arr: new FormControl(),
      price: new FormControl(),
      duration: new FormControl(),
      date: new FormControl(),
      time: new FormControl(),
      companyName: new FormControl(),
      companyLogo: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.apiService.getFlights().subscribe((response: any) => {
      this.flights = response.data;
    });
    this.apiService.getAirports().subscribe((response: any) => {
      this.airports = response.data;
    });
  }

  selectFlight() {
    this.flightForm.setValue({
      dep: this.selectedFlight.dep._id || '',
      arr: this.selectedFlight.arr._id || '',
      price: this.selectedFlight.price || '',
      duration: this.selectedFlight.duration || '',
      date: this.selectedFlight.date || '',
      time: this.selectedFlight.time || '',
      companyLogo: this.selectedFlight.companyLogo || '',
      companyName: this.selectedFlight.companyName || '',
    });
  }
  add() {
    if (this.flightForm.valid) {
      this.apiService.addFlight(this.flightForm.value).subscribe((response: any) => {
        this.ngOnInit();
      });
    }
  }
  edit() {
    if (this.flightForm.valid) {
      this.apiService.editFlight(this.selectedFlight._id, this.flightForm.value).subscribe((response: any) => {
        this.ngOnInit();
      });
    }
  }
  deleteFlight() {
    this.apiService.deleteFlight(this.selectedFlight._id).subscribe((response: any) => {
      this.ngOnInit();
    });
  }

}
