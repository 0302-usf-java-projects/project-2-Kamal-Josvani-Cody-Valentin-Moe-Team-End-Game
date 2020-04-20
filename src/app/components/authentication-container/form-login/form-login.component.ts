import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  isLoading: boolean = false;
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    localStorage.getItem('login') == 'true'
      ? this.router.navigateByUrl('/dashboard')
      : '';
  }

  toRegisterFunc() {
    this.toggle.emit();
  }

  login() {
    this.isLoading = !this.isLoading;
    localStorage.setItem('login', 'true');
    setTimeout(() => {
      this.authService.turnOn();
      this.router.navigateByUrl('/dashboard');
      this.isLoading = false;
    }, 3000);
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }
}
