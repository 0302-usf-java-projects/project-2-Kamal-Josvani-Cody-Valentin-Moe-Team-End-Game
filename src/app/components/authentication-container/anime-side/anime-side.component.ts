import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { User } from 'src/app/model/User';
declare var particlesJS: any;
@Component({
  selector: 'app-anime-side',
  templateUrl: './anime-side.component.html',
  styleUrls: ['./anime-side.component.scss'],
})
export class AnimeSideComponent implements OnInit {
  isLoginWrong = false;
  isWelcome = true;
  isLoginSuccess = false;
  isRegisterSuccess = false;
  user:User;
  firstnameRegister:string;
  constructor(private sharedService:SharedService) {

  }

  ngOnInit(): void {
    particlesJS.load('anime-container', 'assets/particlesjs.json', function () {
      console.log('callback - particles.js config loaded');
    });
    this.sharedService.getWrongLogin().subscribe(()=>{
      this.isLoginWrong = true;
      this.isWelcome = false;
      this.isLoginSuccess = false;
      this.isRegisterSuccess = false;
    });
    this.sharedService.getSuccessLogin().subscribe(()=>{
      this.isLoginWrong = false;
      this.isWelcome = false;
      this.isLoginSuccess = true;
      this.isRegisterSuccess = false;
      this.user = JSON.parse(localStorage.getItem("login"));

    });
    this.sharedService.getSuccessRegister().subscribe((firstnameObject)=>{
      this.firstnameRegister = firstnameObject["firstname"];
      console.log(this.firstnameRegister);
      this.isLoginWrong = false;
      this.isWelcome = false;
      this.isLoginSuccess = false;
      this.isRegisterSuccess = true;
    });
  }
}
