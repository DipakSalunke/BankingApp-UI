import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string = 'http://127.0.0.1:5001/user'
  private baseaUrl:string = 'http://127.0.0.1:5002/account'

  constructor(private http: HttpClient) { }

  register(signupData){
    console.log(sessionStorage);
    alert(sessionStorage.getItem("token"))
    let headers = new HttpHeaders()
    
    .set("Authorization","Bearer "+sessionStorage.getItem("token"))
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    return this.http.put(this.baseaUrl , JSON.stringify(signupData), {headers});
  }
  registerUser(signupUserData){
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    return this.http.post(this.baseUrl + '/register', JSON.stringify(signupUserData), {headers});
  }

  login(loginData):Observable<HttpResponse<Object>>{
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    return this.http.post<HttpResponse<Object>>(this.baseUrl + '/login', JSON.stringify(loginData), {headers, observe: 'response'});
  }

  getUserInfoByUsername(username){
    let headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .set("x-auth-token", sessionStorage.getItem('auth-token'));
    return this.http.get(this.baseUrl + `/getuserbyusername/${username}`, {headers});
  }

  changePassword(forgotPasswordData){
    let headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  return this.http.post(this.baseUrl + '/updatepassword', JSON.stringify(forgotPasswordData), {headers});
  }
}
