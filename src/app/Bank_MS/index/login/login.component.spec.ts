import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        FormBuilder,
        AuthService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 2 fields in the form', () => {
    expect(component.loginForm.contains('username')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should make the name control required', () => {
    let control = component.loginForm.get('username');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the password control required', () => {
    let control = component.loginForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });


  it('should redirect to loan page',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, "navigateByUrl");

    let authService = TestBed.inject(AuthService)
    let spy2 = spyOn(authService,"login")

    component.loginForm.controls.username.setValue("user1");
    component.loginForm.controls.password.setValue("123456");

    component.login();
    fixture.detectChanges();

    expect(spy2).toHaveBeenCalled;
    expect(spy).toHaveBeenCalledWith('/loan');
  });

  it('Should not go to loan if loginForm is Invalid',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigateByUrl');

    component.loginForm.controls.username.setValue("user1");
    component.loginForm.controls.password.setValue("");

    component.login();
    fixture.detectChanges();

    expect(spy).not.toHaveBeenCalled;
  });

    // it('should redirect the customer to hte register page',() =>{
    //   let router =TestBed.get(RouterTestingModule);
    //   let spy = spyOn(router,"navigateByUrl");

    //   expect(spy).toHaveBeenCalledWith('/register');
    // });

  });
