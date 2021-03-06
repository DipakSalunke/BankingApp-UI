import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './components/home/home.module';
import { IndexModule } from './components/index/index.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import { NoPageComponent } from './components/no-page/no-page.component';
import { routes } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import { LoanService } from './services/loan.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndexComponent,
    NoPageComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    MatToolbarModule,


  ],
  providers: [LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
