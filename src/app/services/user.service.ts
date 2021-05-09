import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string = 'http://127.0.0.1:5001/user'


  constructor(private http: HttpClient) { }

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
}
