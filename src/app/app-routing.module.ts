import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './_helper/auth.guard';

const routes: Routes = [{path:'',component: LoginComponent},
{path:'home',component: HomeComponent, canActivate: [AuthGuard]}

  ];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
 })
export class AppRoutingModule { }
