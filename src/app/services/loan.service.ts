import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private baseUrl:string = 'http://127.0.0.1:5003/loan'
  constructor(private http: HttpClient) { }

  apply(loanData){
    console.log(sessionStorage.getItem("token"))
    let headers = new HttpHeaders()
    
    .set("Authorization","Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6dHJ1ZSwiaWF0IjoxNjIwMDM5NzkzLCJqdGkiOiJlNTYyYjFkYS1jNjQ5LTQxYzgtOTFkZS1lNmQyNzYxMDE3ODAiLCJuYmYiOjE2MjAwMzk3OTMsInR5cGUiOiJhY2Nlc3MiLCJzdWIiOjEsImV4cCI6MTYyMDA0MzM5MywiaXNfYWRtaW4iOnRydWV9.CeYsFzbyWrzTBdUzynnT651ILoNQxmWB9KwMlRTNXq8")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    return this.http.post(this.baseUrl, JSON.stringify(loanData), {headers});
  }
}
