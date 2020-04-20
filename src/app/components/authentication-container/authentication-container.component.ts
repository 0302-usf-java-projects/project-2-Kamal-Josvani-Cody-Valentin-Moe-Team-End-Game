import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-container',
  templateUrl: './authentication-container.component.html',
  styleUrls: ['./authentication-container.component.scss'],
})
export class AuthenticationContainerComponent implements OnInit {
  isLogin: boolean = true;
  isRegister: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.isLogin = !this.isLogin;
    this.isRegister = !this.isRegister;
  }
}
