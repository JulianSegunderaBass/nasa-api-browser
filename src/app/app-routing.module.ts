import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodComponent } from './apod/apod.component';
import { RoverComponent } from './mars-rover/rover.component';

const routes: Routes = [
  { path: '', redirectTo: '/apod', pathMatch: 'full' },
  { path: 'apod', component: ApodComponent },
  { path: 'mars-rover', component: RoverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
