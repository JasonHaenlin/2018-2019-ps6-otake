import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import {UniversityPageComponent} from "./university-page/university-page.component";

const routes: Routes = [
  { path: '', component: UniversityPageComponent },
  { path: 'details/:name', component: UniversityDetailsComponent },
  { path: '**', component: UniversityPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
