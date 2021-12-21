import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodComponent } from './apod/apod.component';
import { ApodDetailComponent } from './apod/apod-detail.component';
import { RoverComponent } from './mars-rover/rover.component';
import { RoverDetailComponent } from './mars-rover/rover-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/apod', pathMatch: 'full' },
  { path: 'apod', component: ApodComponent, children: [
    { path: ':id', component: ApodDetailComponent }
  ] },
  { path: 'mars-rover', component: RoverComponent, children: [
    { path: ':id', component: RoverDetailComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
