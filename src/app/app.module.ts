import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './Bank_MS/index/index.component';
import { LoginComponent } from './Bank_MS/index/login/login.component';
import { RegisterComponent } from './Bank_MS/index/register/register.component';
import { HomeComponent } from './Bank_MS/home/home.component';
import { LoanComponent } from './Bank_MS/home/loan/loan.component';
import { UpdateComponent } from './Bank_MS/home/update/update.component';
import { SuccessComponent } from './Bank_MS/home/success/success.component';

import { AppRoutingModule } from './app-routing.module';  // CLI imports AppRoutingModule

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { SelectService } from './services/select.service';
import { CommonService } from './services/common.service';
import { routes } from './app.router';
import { HomeModule } from './Bank_MS/home/home.module';
import { IndexModule } from './Bank_MS/index/index.module';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    // LoginComponent,
    // RegisterComponent,
    // LoanComponent,
    // UpdateComponent,
    // SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    HomeModule,
    IndexModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    SelectService,
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
