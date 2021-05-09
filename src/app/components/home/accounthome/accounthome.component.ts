import { AccountService } from "./../../../services/account.service";
import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { NumberValueAccessor } from "@angular/forms/src/directives";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-accounthome",
  templateUrl: "./accounthome.component.html",
  styleUrls: ["./accounthome.component.css"]
})
export class AccounthomeComponent implements OnInit {
  private isAccountExist: boolean;
  private closingBalance: string = "500";
  name: string;
  lastActive: string;
  acc_id: string;
  email: string;
  gender: string;
  initials: string;
  constructor(private accountService: AccountService, private authService: AuthService, private router: Router) {
    this.retrieveAccountInfo();

  }
  errorMsg = ""
  ngOnInit() { }

  retrieveAccountInfo() {
    let username = sessionStorage.getItem("username");
    this.accountService.retrieveAccountInfoByUsername(username).subscribe(
      (res: any) => {
        this.setvalues(res);
      },
      (httpErr: HttpErrorResponse) => {
        if (httpErr.status === 401) {
          this.logoutAction();
        }
        else if (httpErr.status === 400) {
          this.errorMsg = httpErr.error["message"] + ". Create one to get started!";
          this.isAccountExist = false;
        } else {
          this.errorMsg = "Service Down! Try After some time !"
        }
      }
    );
  }
  setvalues(res) {
    this.name = res.name;

    this.acc_id = res.id;
    this.email = res.email;
    this.gender = res.gender;
    this.isAccountExist = true;

    this.closingBalance = res.balance;
    this.lastActive = new Date().toLocaleString();
    sessionStorage.setItem("accountInfo", JSON.stringify(res));
    this.genderReveal();
  }
  genderReveal() {

    if (this.gender === 'female') {
      this.initials = "Ms.";

    } else if(this.gender === 'male') {
      this.initials = "Mr.";
    }
  }

  logoutAction() {
    this.authService.logoutSession();
    this.router.navigate(["login"]);
  }

}
