import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login-service.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< Updated upstream
=======
import { LoginComponent } from './login/login.component';
import { InventoryViewComponent } from './home/inventory-view/inventory-view.component';
import { HomeModule } from './home/home.module';
import { MaterialModule } from 'src/material.module';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helper/auth.guard';
import { LoginpopupComponent } from './loginpopup/loginpopup.component';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    HomeComponent
=======
    LoginComponent,
    RegisterComponent,
    LoginpopupComponent,
    
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
<<<<<<< Updated upstream
  providers: [LoginService],
=======
  providers: [AuthGuard],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
