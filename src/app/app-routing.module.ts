import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./login/login.component').then(l => l.LoginComponent) },
  { path: 'register', loadComponent: () => import('./register/register.component').then(r => r.RegisterComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
