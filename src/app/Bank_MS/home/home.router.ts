import { Route } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";

import { HomeComponent } from "./home.component";
import { LoanComponent } from "./loan/loan.component";
import { SuccessComponent } from "./success/success.component";
import { UpdateComponent } from "./update/update.component";

export const HomeRoutes: Route[] = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "loan", component: LoanComponent },
      { path: "update", component: UpdateComponent },
      { path: 'success', component: SuccessComponent},
    ]
  }
];
