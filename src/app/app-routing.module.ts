import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

<<<<<<< Updated upstream
const routes: Routes = [{path:'',component:AppComponent},
{path:'home',component:HomeComponent}];
=======
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
      loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule),
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
>>>>>>> Stashed changes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
<<<<<<< Updated upstream
  exports: [RouterModule]
})
=======
  exports: [RouterModule],
  providers:[AuthGuard]
 })
>>>>>>> Stashed changes
export class AppRoutingModule { }
