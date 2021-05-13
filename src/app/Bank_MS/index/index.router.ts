import { Route } from "@angular/router";

import { IndexComponent } from "./index.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

import { AuthGuard } from "src/app/guards/auth.guard";

export const IndexRoutes: Route[] = [
  {
    path: "",
    component: IndexComponent,
    // canActivate: [LoginGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
    ]
  }
];
