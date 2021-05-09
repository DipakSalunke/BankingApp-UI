import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  private baseUrl: string = "http://127.0.0.1:5002/account";
  constructor(private http: HttpClient) { }

  register(signupData){
    console.log(sessionStorage);

    let headers = new HttpHeaders()

    .set("Authorization","Bearer "+sessionStorage.getItem("token"))
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    return this.http.put(this.baseUrl , JSON.stringify(signupData), {headers});
  }
  retrieveAccountInfoByUsername(username) {
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("Authorization", "Bearer " + sessionStorage.getItem("token"));
    return this.http.post(this.baseUrl, JSON.stringify({ "username": username }), {
      headers
    });
  }
}
