import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { APOD } from './apod.interface';

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
    <input type="number" min="1" [(ngModel)]="apodCount" (input)="onApodCountChanged()">
    <div class="apod-container" *ngIf="dataLoaded; else dataNotLoaded">
      <div class="apod-list">
        <div class="apod-card" *ngFor="let apod of apodData" [routerLink]="[apod.id]" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
          <p class="apod-card-title">{{apod.id}} : {{apod.title}}</p>
          <p>{{apod.copyright}}</p>
          <p>{{apod.date | date:'longDate' }}</p>
        </div>
      </div>
      <router-outlet></router-outlet>
    </div>
    <ng-template #dataNotLoaded>Loading data...</ng-template>
  `,
  styles: [`
  
  `]
})
export class ApodComponent implements OnInit {
  apodData?: APOD[];
  apodCount: number = 8;
  dataLoaded: boolean = false;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getApodData(this.apodCount);
  }

  getApodData(apodCount: number): void {
    this.apiService.getApodData(apodCount)
      .subscribe(data => {
        this.apodData = data;
        this.dataLoaded = true;
      });
  }

  onApodCountChanged() {
    // Timeout function before calling api
    this.dataLoaded = false;
    setTimeout(() => { 
      this.getApodData(this.apodCount);
    }, 2000);
  }
}
