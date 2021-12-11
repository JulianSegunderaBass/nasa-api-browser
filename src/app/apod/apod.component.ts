import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

// Properties to consider:
// - copyright
// - date
// - explanation
// - hdurl
// - title
// - url

@Component({
  selector: 'apod-browser',
  template: `
    <h2>APOD Browser</h2>
    <div class="apod-container" *ngIf="dataLoaded; else dataNotLoaded">
      <div class="apod-list">
        <div class="apod-card" *ngFor="let apod of apodData">
          <p class="apod-card-title">{{apod['id']}} : {{apod['title']}}</p>
          <p>{{apod['copyright']}}</p>
          <p>{{apod['date']}}</p>
        </div>
      </div>
      <apod-detail></apod-detail>
    </div>
    <ng-template #dataNotLoaded>Loading data...</ng-template>
  `,
  styles: [`
  
  `]
})
export class ApodComponent implements OnInit {
  apodData: [] = [];
  dataLoaded: boolean = false;

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
        this.dataLoaded = true;
      });
  }
}
