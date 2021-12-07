import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'apod-browser',
  template: `
    <h2>APOD Browser</h2>
    <div class="apod-container" *ngFor="let apod of apodData">
      <p>Copyright: {{apod['copyright']}}</p>
      <p>Date: {{apod['date']}}</p>
    </div>
  `,
  styles: [`
  
  `]
})
export class ApodComponent implements OnInit {
  apodData: [] = [];

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getApodData();
  }

  getApodData(): void {
    this.apiService.getApodData()
      .subscribe(data => {
        this.apodData = data;
      });
  }
}
