import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardServiceService implements CanActivate {
  constructor(public auth: AuthServiceService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticatedFunc()) {
      console.log(this.auth.isAuthenticated);
      this.router.navigateByUrl('/login');
      return false;
    }
    // this.router.navigateByUrl('/dashboard');
    return true;
  }
}
