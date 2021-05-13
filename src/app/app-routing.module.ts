import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoanComponent } from './Bank_MS/home/loan/loan.component';
import { LoginComponent } from './Bank_MS/index/login/login.component';
import { RegisterComponent } from './Bank_MS/index/register/register.component';
import { UpdateComponent } from './Bank_MS/home/update/update.component';
import { SuccessComponent } from './Bank_MS/home/success/success.component';

import { AuthGuard } from './guards/auth.guard';

// const appRoutes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'loan', component: LoanComponent, canActivate: [AuthGuard] },
//   { path: 'update', component: UpdateComponent, canActivate: [AuthGuard] },
//   { path: 'success', component: SuccessComponent, canActivate: [AuthGuard] }
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [],
      { enableTracing: true } // <-- debugging purposes only)],
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
