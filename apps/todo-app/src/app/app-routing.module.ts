import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@todo-list/app/auth";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('@todo-list/app/pages/home').then(module => module.HomeModule) },
  { path: 'auth', loadChildren: () => import('@todo-list/app/auth').then(module => module.AuthModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
