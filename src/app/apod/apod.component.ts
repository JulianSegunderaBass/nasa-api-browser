import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    <h2>Astronomy Picture of the Day | APOD</h2>
    <form class="apod-input" [formGroup]="dateFilter">
      <label for="apod-date-start">From: </label>
      <input type="date" class="apod-date-input" id="apod-date-start" formControlName="apodDateStart">
      <label for="apod-date-end">To: </label>
      <input type="date" class="apod-date-input" id="apod-date-end" formControlName="apodDateEnd">
      <button class="btn" (click)="clearFilter()">Reset</button>
      <button type="submit" class="btn" (click)="onDateFilter()">Filter</button>
    </form>
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
    <ng-template #dataNotLoaded>
      <p class="loading-placeholder">Loading data...</p>
    </ng-template>
  `,
  styles: [`
  
  `]
})
export class ApodComponent implements OnInit {
  apodData?: APOD[];
  dataLoaded: boolean = false;
  dateFilter!: FormGroup;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    let today = new Date();
    // Initializing form
    this.dateFilter = new FormGroup({
      'apodDateStart': new FormControl(null),
      'apodDateEnd': new FormControl(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
    });
    this.clearFilter()
  }

  getApodData(start: string, end: string): void {
    this.dataLoaded = false;
    this.apiService.getApodData(start, end)
      .subscribe(data => {
        this.apodData = data;
        this.dataLoaded = true;
      });
  }

  onDateFilter() {
    this.getApodData(this.dateFilter.value.apodDateStart, this.dateFilter.value.apodDateEnd);
  }

  clearFilter() {
    let today = new Date();
    let start = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 8}`;
    let end = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    this.getApodData(start, end);
  }
}
