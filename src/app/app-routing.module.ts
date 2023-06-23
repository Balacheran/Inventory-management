import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardl } from './_helper/authl.gaurd';
import { AuthGuard } from './_helper/auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path:'',component: LoginComponent},
{path:'register',component: RegisterComponent},
{path:'home',component: HomeComponent, canActivate: [AuthGuardl]},
{path: '',
  component: HomeComponent,
  canActivate: [AuthGuardl],
  children: [
    {
      path: 'home',
      data: {
        title: 'Home'
      },
      loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule),
      canActivate: [AuthGuardl]
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
  providers:[AuthGuardl]
 })
export class AppRoutingModule { }
