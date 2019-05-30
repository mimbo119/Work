import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'files',
    loadChildren: './home/home.module#HomeModule',
    canActivate : [AuthGuard]

  },
  {
    path: '',
    component: LoginPageComponent
  },
  { 
    path: 'notfound',
    redirectTo: '/login',
    pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
