import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [AuthService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the customer to the home page', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigateByUrl');

    component.logout();

    expect(spy).toHaveBeenCalledWith('/login');
  });

  // it('should redirect the customer to the home page',()=>{
  //     let router = TestBed.get(Router);
  //     let spy = spyOn(router, 'navigateByUrl');

  //     component.goToUpdate();

  //     expect(spy).toHaveBeenCalledWith('/update');
  // });
});
