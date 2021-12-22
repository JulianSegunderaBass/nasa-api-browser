import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { roverImg } from './rover-img.interface';

// Properties to consider:
// - id
// - sol
// - camera.id
// - camera.name
// - camera.rover_id
// - camera.full_name
// - img_src
// - earth_date
// - rover.id
// - rover.name
// - rover.landing_date
// - rover.launch_date
// - rover.status

@Component({
  selector: 'rover-browser',
  template: `
    <h2>Mars Rover Browser</h2>
    <form class="filter-form" [formGroup]="roverFilter">
      <div class="form-group">
        <label for="capture-date">Captured On: </label>
        <input type="date" class="filter-input" id="capture-date" formControlName="captureDate">
      </div>
      <div class="form-group">
        <label for="rovers">Rover: </label>
        <select name="rovers" id="rovers" class="filter-input" formControlName="rover">
          <option value="">Select a Rover</option>
          <option value="curiosity">Curiosity</option>
          <option value="opportunity">Opportunity</option>
        </select>
      </div>
      <div class="btn-group">
        <button class="btn">Reset</button>
        <button type="submit" class="btn" [disabled]="!roverFilter.valid" (click)="onRoverFilter()">Filter</button>
      </div>
    </form>
    <div class="rover-img-container" *ngIf="dataLoaded; else dataNotLoaded">
      <div class="rover-img-card" *ngFor="let roverImg of roverData" [routerLink]="[roverImg.id]">
        <img [src]="roverImg.img_src" class="rover-img">
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
export class RoverComponent implements OnInit {
  roverData?: roverImg[];
  dataLoaded: boolean = false;
  roverFilter!: FormGroup;
  // curiosityCams: string[] = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'];
  // opportunityCams: string[] = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.roverFilter = new FormGroup({
      'captureDate': new FormControl(null, Validators.required),
      'rover': new FormControl(null, Validators.required)
    });
  }

  getRoverData(captureDate: string, rover: string) {
    this.dataLoaded = false;
    this.apiService.getRoverData(captureDate, rover)
      .subscribe(data => {
        this.roverData = data;
        this.dataLoaded = true;
        console.log(this.roverData);
      });
  }

  onRoverFilter() {
    this.getRoverData(this.roverFilter.value.captureDate, this.roverFilter.value.rover);
  }
}
