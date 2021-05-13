import { async, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Bank_MS/home/home.component';
import { LoanComponent } from './Bank_MS/home/loan/loan.component';
import { SuccessComponent } from './Bank_MS/home/success/success.component';
import { UpdateComponent } from './Bank_MS/home/update/update.component';
import { IndexComponent } from './Bank_MS/index/index.component';
import { LoginComponent } from './Bank_MS/index/login/login.component';
import { RegisterComponent } from './Bank_MS/index/register/register.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IndexComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        LoanComponent,
        UpdateComponent,
        SuccessComponent
      ],
      imports: [
        AppRoutingModule,
        ReactiveFormsModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Bank-Management-System'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Bank-Management-System');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('Bank-Management-System app is running!');
  // });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ABC Bank');
  });

});
