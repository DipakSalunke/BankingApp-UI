import { UserService } from "./../../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import {NgForm} from '@angular/forms';
import { AuthService } from "./../../../services/auth.service";
import {FormGroup, FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: "app-signup-user",
  templateUrl: "./signup-user.component.html",
  styleUrls: ["./signup-user.component.css"]
})
export class SignupUserComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(4)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  });
  errorMsg = "";
  succMsg = "";
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }
  ngOnInit() {}
  signupUserAction() {
    this.userService.registerUser(this.form.value).subscribe(
      (signupResult: Signup) => {
        this.errorMsg = "";
        this.succMsg=signupResult.message;
      },
      (httpErr: HttpErrorResponse) => {
        if (httpErr.status === 400) {
          this.succMsg = "";
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
