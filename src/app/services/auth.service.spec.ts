import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should log in the user if valid input', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigateByUrl');

    var userdata = { username: "user1", password: "123456" }
    service.login(userdata);

    expect(spy).not.toHaveBeenCalledWith('/loan');
  });

  it('should assign create cust id', () => {
    let value = service.cust('1');
    let spy = spyOn(service, 'cust');
    expect(value).toBeFalsy();
  });

});
