import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navigation">
      <a routerLink="/apod" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">APOD</a>
      <a routerLink="/mars-rover" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Mars Rover Images</a>
    </nav>
  `,
  styles: [`
    
  `]
})
export class AppHeaderComponent {

}
