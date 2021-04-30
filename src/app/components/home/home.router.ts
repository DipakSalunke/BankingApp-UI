import { AccounthomeComponent } from './accounthome/accounthome.component';
import { AuthGuard } from './../../guards/auth.guard';
import { SettingsComponent } from "./settings/settings.component";
import { AccountComponent } from "./account/account.component";
import { HomeComponent } from "./home.component";
import { Route } from "@angular/router";
import { LoanComponent } from "./loan/loan.component";

export const HomeRoutes: Route[] = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: AccounthomeComponent },
      { path: "account", component: AccountComponent },
      { path: "loan", component: LoanComponent },
      { path: "settings", component: SettingsComponent }
    ]
  }
];
