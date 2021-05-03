import { UserService } from "./../../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { checkAndUpdateBinding } from "@angular/core/src/view/util";
import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupData = {
    username: "",
    name: "",
    address: "",
    state: "",
    country: "",
    email: "",
    pan: "",
    contact: "",
    dob: "",
    acc_type: "",
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
          this.router.navigate(["signup"]);
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

  
  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }

      const valid = regex.test(control.value);

      return valid ? null : error;
    };
  }

  static passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value;
    const confirmPassword: string = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ NoPasswordMatch: true });
    }
  }
}

class Signup {
  message;
  messageCode;
  username;
  constructor() {}
}
