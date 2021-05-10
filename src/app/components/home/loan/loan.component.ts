import { Component, OnInit } from '@angular/core';
import { LoanService } from "./../../../services/loan.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';
import { AuthService } from 'src/app/services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loanData = {
    acc_id: "",
    loan_type: "",
    loan_amt: "",
    rate_of_int: "",
    duration: "",
  }
  educationData = {
    course_fee: "",
    course: "",
    fatherName: "",
    fatherOcc: "",
    fatherExp: "",
    currExp: "",
    ration: "",
    income: "",
  }
  personalData = {
    AnnualIncome: "",
    companyName: "",
    designation: "",
    totalExp: "",
    CurrentExp: "",
  }



errorMsg = "";
succMsg ="";
constructor(private loanService: LoanService,private authService: AuthService, private router: Router) { }

ngOnInit() {  }

loanApplyAction() {
 if(this.loanData.loan_type=="personal"){
   this.loanData = {...this.loanData,...this.personalData};
 }else{
  this.loanData = {...this.loanData,...this.educationData};
 }
 this.loanData.acc_id = JSON.parse(sessionStorage.getItem("accountInfo")).id;
  this.loanService.apply(this.loanData).subscribe(
    (loanResult: Signup) => {
      this.succMsg = loanResult.message;

    },
    (httpErr: HttpErrorResponse) => {
      if (httpErr.status === 401) {
        this.logoutAction();
      }
      else if (httpErr.status === 400) {
        this.errorMsg = httpErr.error;
      }
    }
  );
}

logoutAction() {
  //let accountNo = JSON.parse(sessionStorage.getItem("accountInfo")).accountNo;
 // this.accountService.updateLastActiveStatus(accountNo).subscribe(res => {});
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
