import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    if (sessionStorage.getItem("username") && sessionStorage.getItem("token")) {
      return true;
    }
    return false;
  }

  loginSession(loginResponse) {
    sessionStorage.setItem("username", loginResponse.body.username);
    sessionStorage.setItem("token", loginResponse.headers.get('access_token'));
  }

  logoutSession() {
    sessionStorage.clear();
  }
}
