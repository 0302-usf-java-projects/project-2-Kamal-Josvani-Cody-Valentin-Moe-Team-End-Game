import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-profil',
  templateUrl: './dashboard-profil.component.html',
  styleUrls: ['./dashboard-profil.component.scss'],
})
export class DashboardProfilComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    console.log('lol');
    this.authService.turnOff();
    this.router.navigateByUrl('/login');
  }
}
