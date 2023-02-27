import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './services/guard/authguard.service';

const routes: Routes = [
  {path: '', loadComponent:()=> import('./home/home.component').then(h=>h.HomeComponent), canActivate:[AuthguardService]},
  { path: 'login', loadComponent: () => import('./login/login.component').then(l => l.LoginComponent)},
  { path: 'register', loadComponent: () => import('./register/register.component').then(r => r.RegisterComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
