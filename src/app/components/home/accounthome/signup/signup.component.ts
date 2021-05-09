
import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import * as moment from 'moment';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupData = {
    username: sessionStorage.getItem("username"),
    name: "",
    address: "",
    state: "",
    country: "",
    email: "",
    pan: "",
    contact: "",
    dob: "",
    acc_type: "",
    gender:"",
    balance:"",
  };
  mindate = moment().subtract(96, "years").format("YYYY-MM-DD");
  maxdate = moment().subtract(18, "years").format("YYYY-MM-DD");
  errorMsg = "";
  succMsg="";
  failed = false;
  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() { }

  signupAction() {

    this.accountService.register(this.signupData).subscribe(
      (signupResult: Signup) => {
        this.errorMsg="";
        this.succMsg = "account created successfully ! You can now apply for loans in loans section !";

      },
      (httpErr: HttpErrorResponse) => {
          this.errorMsg = httpErr.error.message;
        }
    );
  }
}

class Signup {
  message;
  messageCode;
  username;
  constructor() { }
}
