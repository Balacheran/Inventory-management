<<<<<<< Updated upstream
import { NgxSliderModule } from '@angular-slider/ngx-slider';
=======
import { NgxSliderModule } from 'ngx-slider-v2';
>>>>>>> Stashed changes
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
<<<<<<< Updated upstream
import { LoginService } from './login-service.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
=======
import { LoginService } from './login/login-service.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
=======
    LoginComponent,
>>>>>>> Stashed changes
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< Updated upstream
    ToastrModule.forRoot(),
=======
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000, // 15 seconds
      progressBar: false,
    }),
    NgxSliderModule
>>>>>>> Stashed changes
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
