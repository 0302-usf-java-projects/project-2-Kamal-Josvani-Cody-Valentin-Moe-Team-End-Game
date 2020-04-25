import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-profil',
  templateUrl: './dashboard-profil.component.html',
  styleUrls: ['./dashboard-profil.component.scss'],
})
export class DashboardProfilComponent implements OnInit {
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('ok');
    //router.navigate([{ outlets: { my: ['fgd'] } }]);
  }

  ngOnInit(): void {}

  logout() {
    console.log('lol');
    localStorage.setItem("login","false");
    this.router.navigateByUrl('/login');
  }
}
