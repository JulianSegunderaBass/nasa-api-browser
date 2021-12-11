import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apod-detail',
  template: `
    <h3>Apod Detail</h3>
    <p>Title</p>
    <p>Date</p>
    <p>Explanation</p>
    <p>Copyright</p>
    <p>URL</p>
  `,
  styles: [`
  
  `]
})
export class ApodDetailComponent implements OnInit {

  ngOnInit(): void {
  }

}
