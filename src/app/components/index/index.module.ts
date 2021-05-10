import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupUserComponent } from './signup-user/signup-user.component';
@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, SignupUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class IndexModule { }
