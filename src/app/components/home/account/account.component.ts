import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import * as moment from 'moment';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import {AccounthomeComponent} from 'src/app/components/home/accounthome/accounthome.component'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account = JSON.parse(sessionStorage.getItem("accountInfo"));
  signupData = {
    username: this.account.username,
    name: this.account.name,
    address: this.account.address,
    state: this.account.state,
    country: this.account.country,
    email: this.account.email,
    pan: this.account.pan,
    contact: this.account.contact,
    dob: this.account.dob,
    acc_type: this.account.acc_type,
    gender:this.account.gender,
    balance:this.account.balance,
  };

  errorMsg = "";
  succMsg=""
  mindate = moment().subtract(96, "years").format("YYYY-MM-DD");
  maxdate = moment().subtract(18, "years").format("YYYY-MM-DD");


  constructor(private accountService: AccountService,private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  signupAction() {

    this.accountService.register(this.signupData).subscribe(
      (signupResult: Signup) => {
        this.errorMsg="";
        sessionStorage.setItem("accountInfo", JSON.stringify(signupResult["updated"]));
        this.succMsg = "account updated successfully!";
      },
      (httpErr: HttpErrorResponse) => {
        if (httpErr.status === 401){
          this.logoutAction();
        }
        else if (httpErr.status === 400) {
          this.errorMsg = httpErr.error.message;
        }else{
          this.errorMsg ="Service Down! Try After some time !"
        }
      }
    );
  }


  logoutAction() {
  alert("Session Expired ! Login Again!")
    this.authService.logoutSession();
    this.router.navigate(["login"]);
  }
}

class Signup {
  message;
  messageCode;
  username;
  constructor() { }
}
