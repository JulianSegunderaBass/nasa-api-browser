import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ApiService } from './api.service';

@Component({
  selector: 'image-detail',
  template: `
    <img src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG" class="rover-modal-img">
    <span class="close" (click)="onNavigateBack()">X</span>
  `,
  styles: [`
    
  `]
})
export class ImageDetailComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    
  }

  onNavigateBack() {
    this.location.back();
  }
}
