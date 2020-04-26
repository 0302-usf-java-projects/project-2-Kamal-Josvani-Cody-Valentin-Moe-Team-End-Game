import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import $ from "jquery";
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-dashboard-profil',
  templateUrl: './dashboard-profil.component.html',
  styleUrls: ['./dashboard-profil.component.scss'],
})
export class DashboardProfilComponent implements OnInit {
  src_img:string= "../../../../assets/blank-profile-picture.png";
  userData:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedService:SharedService
  ) {
    this.userData = localStorage.getItem('login');
    this.userData = JSON.parse(this.userData);
    this.imageExists("https://projectendgame.s3.us-east-2.amazonaws.com/"+this.userData['id'].toString());
    this.sharedService.getRefresh().subscribe(()=>{
      this.userData = JSON.parse(localStorage.getItem('login'));
      console.log(this.userData);
      this.imageExists("https://projectendgame.s3.us-east-2.amazonaws.com/"+this.userData['id'].toString()+"?"+Date.now().toString);
      console.log("OPA");
      })
  }

  ngOnInit(): void {}

  logout() {
    console.log('lol');
    localStorage.setItem("login","false");
    this.router.navigateByUrl('/login');
  }


  imageExists(image_url){

    $.get(image_url)
    .done(()=> { 
      console.log("exist");
        this.src_img = image_url;
    }).fail(()=> { 
      console.log("dont exist");
      this.src_img = "../../../../assets/blank-profile-picture.png";
    })

}
}
