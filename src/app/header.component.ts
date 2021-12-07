import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <a routerLink="/apod">APOD</a>
      <a routerLink="/mars-rover">Mars Rover Images</a>
    </nav>
  `,
  styles: [`
    
  `]
})
export class AppHeaderComponent {

}
