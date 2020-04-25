import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  isAuthenticated: boolean;
  constructor(private router: Router, private http: HttpClient) {}

  public isAuthenticatedFunc(): boolean {
    localStorage.getItem('login') == 'false'
      ? (this.isAuthenticated = false)
      : (this.isAuthenticated = true);
    // const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return this.isAuthenticated;
  }

  public turnOn(user) {
    this.isAuthenticated = true;
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigateByUrl('/dashboard/(my:feed)');
  }
  public turnOff() {
    this.isAuthenticated = false;
    localStorage.setItem('user', 'false');
  }
}
