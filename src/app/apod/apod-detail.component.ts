import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { APOD } from './apod.interface';

@Component({
  selector: 'apod-detail',
  template: `
    <div *ngIf="apod; else apodNotSelected">
      <h3>{{apod.title}}</h3>
      <p>{{apod.date}}</p>
      <p>{{apod.explanation}}</p>
      <p>{{apod.copyright}}</p>
      <p>{{apod.url}}</p>
    </div>
    <ng-template #apodNotSelected>No APOD Selected</ng-template>
  `,
  styles: [`
  
  `]
})
export class ApodDetailComponent implements OnInit {
  @Input() apod!: APOD;

  ngOnInit(): void {
    
  }

}
