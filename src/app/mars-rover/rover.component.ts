import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'rover-browser',
  template: `
    <h2>Mars Rover Browser</h2>
    <router-outlet></router-outlet>
  `,
  styles: [`
    
  `]
})
export class RoverComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    
  }
}
