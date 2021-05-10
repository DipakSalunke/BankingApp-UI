import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { RouterTestingModule} from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ HttpClientTestingModule , RouterTestingModule,ReactiveFormsModule ],
      providers: [UserService, AuthService, FormBuilder]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 2 fields in the form',()=>{
    expect(component.form.contains('username')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
 });

 it('should make the name control required',()=>{
    let control = component.form.get('username');
    control.setValue('');
    expect(control.valid).toBeFalsy();
 });

 it('should make the password control required',()=>{
  let control = component.form.get('password');
  control.setValue('');
  expect(control.valid).toBeFalsy();
});

//  it('should redirect the customer to the register page',()=>{
//   let router = TestBed.get(Router);
//   let spy = spyOn(router, 'navigateByUrl');

//   component.loginAction();

//   expect(spy).toHaveBeenCalled();
//   });

  // it('should redirect the customer to the register page when register button is clicked',()=>{
  //   let button = fixture.debugElement.query(By.css('.register'));

  //   button.triggerEventHandler('click', null);
  //   fixture.detectChanges;

  //   expect(component.goToRegister).toHaveBeenCalled();

  // });

  // it('should redirect the customer to the home page',()=>{
  //   let router = TestBed.get(Router);
  //   let spy = spyOn(router, 'navigateByUrl');

  //   component.goToHome();

  //   expect(spy).toHaveBeenCalledWith('/home');
  // });
});


