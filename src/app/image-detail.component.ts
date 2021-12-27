import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'image-detail',
  template: `
    <img [src]="dataUrl" class="rover-modal-img">
    <span class="close" (click)="onNavigateBack()">X</span>
  `,
  styles: [`
    
  `]
})
export class ImageDetailComponent implements OnInit {
  dataID!: number;
  viewMode!: string;
  dataUrl!: string;

  constructor(
    private apiService: ApiService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.dataID = +params['id'];
    });
    this.route.queryParams.subscribe((params: Params) => {
      this.viewMode = params['view'];
    })
    this.dataUrl = this.apiService.getDetailedImage(this.dataID, this.viewMode);
  }

  onNavigateBack() {
    this.location.back();
  }
}
