import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:3001/admin/user/all');
  }

  addUser(user) {
    return this.http.post('http://localhost:3001/admin/user/add', user);
  }
  editUser(id, user) {
    return this.http.post('http://localhost:3001/admin/user/update/' + id, user);
  }
  deleteUser(userId) {
    return this.http.get('http://localhost:3001/admin/user/delete/' + userId);
  }
  getAirports() {
    return this.http.get('http://localhost:3001/admin/airport/all');
  }
  addAirport(airport) {
    return this.http.post('http://localhost:3001/admin/airport/add', airport);
  }
  editAirport(id, airport) {
    return this.http.post('http://localhost:3001/admin/airport/update/' + id, airport);
  }
  deleteAirport(airportId) {
    return this.http.get('http://localhost:3001/admin/airport/delete/' + airportId);
  }
  getFlights() {
    return this.http.get('http://localhost:3001/admin/flight/all');
  }
  getBookings() {
    return this.http.get('http://localhost:3001/admin/booking/all');
  }
  addFlight(flight) {
    return this.http.post('http://localhost:3001/admin/flight/add', flight);
  }
  editFlight(id, flight) {
    return this.http.post('http://localhost:3001/admin/flight/update/' + id, flight);
  }
  deleteFlight(flightId) {
    return this.http.get('http://localhost:3001/admin/flight/delete/' + flightId);
  }
  getFlightsHome() {
    return this.http.get('http://localhost:3001/client/flights/recent');
  }
  getFlight(id) {
    return this.http.get('http://localhost:3001/client/flight/' + id);
  }
  addBooking(form) {
    return this.http.post('http://localhost:3001/client/booking/add', form);
  }
  editBooking(form) {
    return this.http.post('http://localhost:3001/admin/booking/update', form);
  }
  search(form) {
    return this.http.post('http://localhost:3001/client/search', form);
  }
  getUserBookings(id) {
    return this.http.get('http://localhost:3001/client/booking/' + id);
  }

}
