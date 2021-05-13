import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoanComponent } from './loan/loan.component';
import { HomeComponent } from './home.component';
import { UpdateComponent } from './update/update.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    LoanComponent,
    UpdateComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
