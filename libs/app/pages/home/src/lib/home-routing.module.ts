import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: HomeComponent },
  { path: 'list-detail/:id', component: HomeDetailComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
