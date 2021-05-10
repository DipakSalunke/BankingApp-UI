import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';


import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let fixture: ComponentFixture<AuthGuard>;

  beforeEach(async () => {
    await  TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService, FormBuilder]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AuthGuard);
    fixture.detectChanges();
  });
    it('should be created', () => {
      expect(guard).toBeTruthy();
    });

    expect(guard.canActivate()).toBeFalsy();
});
