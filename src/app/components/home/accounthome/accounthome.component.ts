import { AccountService } from "./../../../services/account.service";
import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { NumberValueAccessor } from "@angular/forms/src/directives";

@Component({
  selector: "app-accounthome",
  templateUrl: "./accounthome.component.html",
  styleUrls: ["./accounthome.component.css"]
})
export class AccounthomeComponent implements OnInit {
  private isAccountExist: boolean;
  private closingBalance: string = "500";
  name:string;
  lastActive:string;
  acc_id:string;
  email:string;
  constructor(private accountService: AccountService, private router:Router) {
    this.retrieveAccountInfo();
   
  }

  ngOnInit() {}

  retrieveAccountInfo() {
    let username = sessionStorage.getItem("username");
    this.accountService.retrieveAccountInfoByUsername(username).subscribe(
      (res: any) => {
        this.name = res.name;
        this.acc_id = res.id;
        this.email = res.email;

        this.closingBalance = "500";
        this.lastActive = new Date().toLocaleString();//new String(res.accountDetails.lastActive).replace('T', '|').split('.')[0];
        sessionStorage.setItem("accountInfo", JSON.stringify(res));
        //alert(sessionStorage.getItem("accountInfo"));
        this.isAccountExist = true;
      },
      (httpErr: HttpErrorResponse) => {
        if (httpErr.status === 400 && httpErr.error.messageCode === "ACCRE") {
          this.isAccountExist = false;
        }
      }
    );
  }

  // createNewAccount() {
  //   if (!this.isAccountExist) {
  //     let accountData = {
  //       username: sessionStorage.getItem("username"),
  //       closingBalance: this.closingBalance
  //     };
  //     this.accountService
  //       .createNewAccount(accountData)
  //       .subscribe((res: any) => {
  //         this.isAccountExist = true;
  //         this.router.navigate(['']);
  //       });
  //    }
  // }

}
