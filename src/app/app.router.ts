import { Routes } from "@angular/router";

import { HomeRoutes } from "./Bank_MS/home/home.router";
import { IndexRoutes } from "./Bank_MS/index/index.router";


export const routes: Routes = [
  ...IndexRoutes,
  ...HomeRoutes,
];
