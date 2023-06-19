import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './_helper/auth.guard';

const routes: Routes = [{path:'',component: LoginComponent},
{path:'home',component: HomeComponent, canActivate: [AuthGuard]},
{path: '',
  component: HomeComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'home',
      data: {
        title: 'Home'
      },
      loadChildren: () => import('../app/home/home-routing.module').then(m => m.HomeRoutingModule),
      canActivate: [AuthGuard]
    },
    /*{
      path: 'hotel',
      data: {
        title: 'Hotel'
      },
      loadChildren: () => import('../app/pages/dashboard/hotel/hotel.module').then(m => m.HotelModule),
      canActivate: [AuthGuard]
    },

    {
      path: 'pages',loadChildren: () => import('../app/pages/main/main.module')
      .then(m => m.MainModule),canActivate:[AuthGuard]
   },*/
  
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }]},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: '**', redirectTo: 'home' },
  ];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
 })
export class AppRoutingModule { }
