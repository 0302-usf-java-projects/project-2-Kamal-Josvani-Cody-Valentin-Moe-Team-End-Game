import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  isAuthenticated: boolean;
  constructor(private router: Router, private http: HttpClient) {}

  public isAuthenticatedFunc(): boolean {
    JSON.parse(localStorage.getItem('login')) == null
      ? (this.isAuthenticated = false)
      : (this.isAuthenticated = true);
    // const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return this.isAuthenticated;
  }d

  public authMe(email:String,password:String) {
   return this.http.get(environment.base_url+email+"/"+password+"/authentication.tony")
    .toPromise();
  }
}
