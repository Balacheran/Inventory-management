import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'',component:AppComponent},
{path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
=======
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './_helper/auth.guard';

const routes: Routes = [{path:'',component: LoginComponent},
{path:'home',component: HomeComponent}

  ];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 })
>>>>>>> Stashed changes
export class AppRoutingModule { }
