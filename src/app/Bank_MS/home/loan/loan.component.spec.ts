import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanComponent } from './loan.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanComponent],
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
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 15 fields in the form', () => {
    expect(component.loanForm.contains('loantype')).toBeTruthy();
    expect(component.loanForm.contains('loanamount')).toBeTruthy();
    expect(component.loanForm.contains('loanApplyDate')).toBeTruthy();
    expect(component.loanForm.contains('loanIssueDate')).toBeTruthy();
    expect(component.loanForm.contains('rate')).toBeTruthy();
    expect(component.loanForm.contains('loanDuration')).toBeTruthy();

    // expect(component.loanForm.contains('course')).toBeTruthy();
    // expect(component.loanForm.contains('courseFee')).toBeTruthy();
    // expect(component.loanForm.contains('fatherOcc')).toBeTruthy();
    // expect(component.loanForm.contains('experience')).toBeTruthy();
    // expect(component.loanForm.contains('rationCard')).toBeTruthy();
    // expect(component.loanForm.contains('fatherAnnualIncome')).toBeTruthy();
    // expect(component.loanForm.contains('annualIncome')).toBeTruthy();
    // expect(component.loanForm.contains('companyName')).toBeTruthy();
    // expect(component.loanForm.contains('designation')).toBeTruthy();
    // expect(component.loanForm.contains('perosnalExperience')).toBeTruthy();
  });

  it('should redirect the customer to the success page after taking user input', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigateByUrl');

    component.loanForm.controls.loantype.setValue("Dipak")
    component.loanForm.controls.loanamount.setValue("1500000")
    component.loanForm.controls.loanApplyDate.setValue("2021-10-09")
    component.loanForm.controls.loanIssueDate.setValue("2021-10-10")
    component.loanForm.controls.rate.setValue("7")
    component.loanForm.controls.loanDuration.setValue("20")

    component.submit();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith('/success');
  });

  it('should Not redirect the customer to the success page after taking invalid user input', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigateByUrl');

    component.loanForm.controls.loantype.setValue("Dipak")
    component.loanForm.controls.loanamount.setValue("1500000")
    component.loanForm.controls.loanApplyDate.setValue("2021-10-09")
    component.loanForm.controls.loanIssueDate.setValue("2021-10-10")
    component.loanForm.controls.rate.setValue("")
    component.loanForm.controls.loanDuration.setValue("20")

    component.submit();
    fixture.detectChanges();

    expect(spy).not.toHaveBeenCalledWith('/success');
  });



});
