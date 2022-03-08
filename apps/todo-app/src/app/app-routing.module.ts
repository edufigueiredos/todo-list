import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'home', loadChildren: () => import('@todo-list/app/pages/home').then(module => module.HomeModule) },
  { path: 'auth', loadChildren: () => import('@todo-list/app/auth').then(module => module.AuthModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
