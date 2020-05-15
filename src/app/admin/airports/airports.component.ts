import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../../app/services/api.service';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {

  airportForm: FormGroup;
  selectedAirport;
  airports = [];
  constructor(private apiService: ApiService) {
    this.airportForm = new FormGroup({
      name: new FormControl(),
      country: new FormControl()
    })
  }

  ngOnInit(): void {
    this.apiService.getAirports().subscribe((response: any) => {
      this.airports = response.data;
    });
  }

  selectAirport() {
    this.airportForm.setValue({
      name: this.selectedAirport.name,
      country: this.selectedAirport.country,
    });
  }
  add() {
    if (this.airportForm.valid) {
      this.apiService.addAirport(this.airportForm.value).subscribe((response: any) => {
        this.ngOnInit();
      });
    }
  }
  edit() {
    if (this.airportForm.valid) {
      this.apiService.editAirport(this.selectedAirport._id, this.airportForm.value).subscribe((response: any) => {
        this.ngOnInit();
      });
    }
  }
  deleteAirport() {
    this.apiService.deleteAirport(this.selectedAirport._id).subscribe((response: any) => {
      this.ngOnInit();
    });
  }

}
