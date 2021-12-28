import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navigation">
      <a routerLink="/apod" [ngClass]="{'active': activeLink === 'apod'}" (click)="onSetActiveLink('apod')">APOD</a>
      <a routerLink="/mars-rover" [ngClass]="{'active': activeLink === 'mars-rover'}" (click)="onSetActiveLink('mars-rover')">Mars Rover Images</a>
    </nav>
  `,
  styles: [`
    
  `]
})
export class AppHeaderComponent {
  activeLink: string = 'apod';

  onSetActiveLink(link: string) {
    this.activeLink = link;
  }
}
