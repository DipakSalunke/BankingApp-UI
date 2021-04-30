import { UserService } from "./../../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup-user",
  templateUrl: "./signup-user.component.html",
  styleUrls: ["./signup-user.component.css"]
})
export class SignupUserComponent implements OnInit {
  signupUserData = {
    username: "",
    password:""
  };

  errorMsg = "";
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  signupUserAction() {
    this.userService.registerUser(this.signupUserData).subscribe(
      (signupResult: Signup) => {
        alert(signupResult.message);
        this.errorMsg = "";
        this.router.navigate(["registeruser"]);
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
