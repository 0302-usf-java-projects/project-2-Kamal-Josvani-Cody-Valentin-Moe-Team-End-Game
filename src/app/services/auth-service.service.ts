import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  isAuthenticated: boolean;
  constructor(private router: Router) {}

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

  public turnOn() {
    this.isAuthenticated = true;
    localStorage.setItem('login', 'true');
    this.router.navigate['dashboard'];
  }
  public turnOff() {
    this.isAuthenticated = false;
    localStorage.setItem('login', 'false');
  }
}
