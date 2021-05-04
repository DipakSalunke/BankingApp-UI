import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  private baseUrl: string = "http://127.0.0.1:5002/account";
  constructor(private http: HttpClient) { }

  retrieveAccountInfoByUsername(username) {
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + sessionStorage.getItem("token"));
    return this.http.post(this.baseUrl, JSON.stringify({ "username": username }), {
      headers
    });
  }

  createNewAccount(newAccount) {
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("x-auth-token", sessionStorage.getItem("auth-token"));
    return this.http.post(this.baseUrl + '/createnewaccount', JSON.stringify(newAccount), { headers });
  }

  updateLastActiveStatus(accountNo) {
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("x-auth-token", sessionStorage.getItem("auth-token"));
    return this.http.get(this.baseUrl + `/lastactivated/${accountNo}`, { headers });
  }
}
