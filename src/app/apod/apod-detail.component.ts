import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { APOD } from './apod.interface';

@Component({
  selector: 'apod-detail',
  template: `
    <div *ngIf="apod; else apodNotSelected">
      <div class="apod-details">
        <div class="apod-img-container">
          <img [src]="apod.url" class="apod-img">
        </div>
        <div class="apod-info">
          <p class="apod-info-title">{{apod.title}}, {{apod.date}}</p>
          <p class="apod-info-copyright">Copyright: {{apod.copyright}}</p>
          <p>{{apod.explanation}}</p>
        </div>
      </div>
    </div>
    <ng-template #apodNotSelected>No APOD Selected</ng-template>
  `,
  styles: [`
  
  `]
})
export class ApodDetailComponent implements OnInit {
  apod?: APOD;
  id?: number;

  constructor(
    private apiService: ApiService, 
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Observable for changing parameters
    this.route.params.subscribe((params: Params) => {
      // '+' casts the string id into a number
      this.id = +params['id'];
      this.apod = this.apiService.getApod(this.id);
    });
  }

}
