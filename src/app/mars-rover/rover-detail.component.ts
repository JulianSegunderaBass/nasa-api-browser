import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'rover-detail',
  template: `
    <img src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG" class="rover-modal-img">
    <span class="close" routerLink="/mars-rover">X</span>
  `,
  styles: [`
    
  `]
})
export class RoverDetailComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    
  }
}
