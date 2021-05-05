import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../../services/user.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account = JSON.parse( sessionStorage.getItem("accountInfo"));
  signupData = {
    username:this.account.username,
    name:this.account.name,
    address:this.account.address,
    state: this.account.state,
    country: this.account.country,
    email: this.account.email,
    pan: this.account.pan,
    contact: this.account.contact,
    dob: this.account.dob,
    acc_type: this.account.acc_type,
  };

  errorMsg = "";
  failed = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  signupAction() {
    if (this.signupData.name.length) {
      this.failed= true;
      this.errorMsg = "name must be less than 10 characters";
      this.router.navigate(["signup"]);
    }
    this.userService.register(this.signupData).subscribe(
      (signupResult: Signup) => {
        alert(signupResult.message);
        if (this.failed == false) {
          this.errorMsg = "account creation failed ! Try again !";
         // this.router.navigate(["signup"]);
        }
        this.errorMsg = "account created successfully ! login now";
        this.router.navigate(["login"]);
      },
      (httpErr: HttpErrorResponse) => {
        if (httpErr.status === 400) {
          this.errorMsg = httpErr.error.message;
        }
      }
    );
  }
}

class Signup {
  message;
  messageCode;
  username;
  constructor() {}
}
