import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  airports = [];
  flights = [];
  constructor(private renderer: Renderer2, private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getAirports().subscribe((response: any) => {
      this.airports = response.data;
    });
    this.apiService.getFlightsHome().subscribe((response: any) => {
      this.flights = response.data;
    });

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js/jquery.flexslider.js';
    this.renderer.appendChild(document.body, script);

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'assets/js/custom-flex.js';
    this.renderer.appendChild(document.body, script2);
  }

  search(dep, arr, checkin) {
    console.log(dep, arr, checkin);
    this.apiService.search({dep, arr, checkin}).subscribe((response: any) => {
      this.flights = response.data;
    })
  }

}
