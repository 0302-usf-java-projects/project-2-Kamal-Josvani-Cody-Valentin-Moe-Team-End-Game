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
    localStorage.getItem('login') == null
      ? (this.isAuthenticated = false)
      : (this.isAuthenticated = true);
    // const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return this.isAuthenticated;
  }d

  public authMe(email:String,password:String) {
   return this.http.get("http://localhost:8080/Project_2_SpringFlowers/"+email+"/"+password+"/authentication.tony")
    .toPromise();
  }
}
