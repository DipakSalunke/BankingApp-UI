import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { AccounthomeComponent } from './accounthome/accounthome.component';
import { LoanComponent } from './loan/loan.component';

@NgModule({
  declarations: [SettingsComponent, AccountComponent, AccounthomeComponent, LoanComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class HomeModule { }