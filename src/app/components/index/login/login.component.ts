/* import { UserService } from "./../../../services/user.service";
import { AuthService } from "./../../../services/auth.service";
import { Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {NgForm} from '@angular/forms';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginData = {
    username: "",
    password: ""
  };
  errorMsg = "";

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  loginAction() {
    console.log(this.loginData);
    this.userService.login(this.loginData).subscribe(
      loginResponse => {

        this.errorMsg = "";
        this.authService.loginSession(loginResponse);
        this.router.navigate([""]);
      },
      (httpErr: HttpErrorResponse) => {
        if (httpErr.status === 401) {
          this.errorMsg = httpErr.error["message"];
          ;
        }
      }
    );
  }



}
 */


import { UserService } from "./../../../services/user.service";
import { AuthService } from "./../../../services/auth.service";
import { Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import {FormGroup, FormControl,ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)])
  });
  errorMsg = "";

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

  loginAction() {
    this.userService.login(this.form.value).subscribe(
      loginResponse => {

        this.errorMsg = "";
        this.authService.loginSession(loginResponse);
        this.router.navigate([""]);
      },
      (httpErr: HttpErrorResponse) => {
        if (httpErr.status === 401) {
          this.errorMsg = httpErr.error["message"];
          ;
        }
      }
    );
  }



}
