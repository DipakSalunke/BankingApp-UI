import { Component, OnInit } from '@angular/core';
import { LoanService } from "./../../../services/loan.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loanData = {
    acc_id:"",
    loan_type:"",
    loan_amt:"",
    rate_of_int:"",
    duration:"",
  };
 
  
  errorMsg = "";
  failed = false;
  constructor(private loanService: LoanService, private router: Router) {}

  ngOnInit() {}

  loanApplyAction() {
    console.log(this.loanData.loan_type);
    this.loanService.apply(this.loanData).subscribe(
      (loanResult: Signup) => {
        alert(loanResult.message);
        if (this.failed == false) {
          this.errorMsg = "loan creation failed ! Try again !";
        }
        this.errorMsg = "loan created successfully !";
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
