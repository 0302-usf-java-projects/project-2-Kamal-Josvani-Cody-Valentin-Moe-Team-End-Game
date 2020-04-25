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
    localStorage.getItem('login') != 'false'
      ? ''
      : this.router.navigateByUrl('/dashboard/(my:feed)');
  }

  toRegisterFunc() {
    this.toggle.emit();
  }

  login() {
    this.isLoading = !this.isLoading;
    let user = {
      id: 1,
      firstname: 'kamal',
      lastname: 'ait sidhoum',
      sex: '1',
      email: 'kamalaitsidhofffggum@gmail.com',
      birthday: '05/14/1994',
      password: 'password',
    };
    localStorage.setItem('user', JSON.stringify(user));
    setTimeout(() => {
      this.authService.turnOn(user);
      this.router.navigateByUrl('/dashboard/(my:feed)');
      this.isLoading = false;
    }, 3000);
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }
}
