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
  isResetPassword = false;
  user:User;
  userResetPassword:any;
  firstnameRegister:any;
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
      this.isResetPassword = false;
    });
    this.sharedService.getSuccessLogin().subscribe(()=>{
      this.isLoginWrong = false;
      this.isWelcome = false;
      this.isLoginSuccess = true;
      this.isRegisterSuccess = false;
      this.isResetPassword = false;
      this.user = JSON.parse(localStorage.getItem("login"));

    });
    this.sharedService.getSuccessRegister().subscribe((firstnameObject)=>{
      this.firstnameRegister = firstnameObject["firstname"];
      console.log(this.firstnameRegister);
      this.isLoginWrong = false;
      this.isWelcome = false;
      this.isLoginSuccess = false;
      this.isRegisterSuccess = true;
      this.isResetPassword = false;
    });
    this.sharedService.getResetPassword().subscribe((resp)=>{
      this.userResetPassword = resp;
      console.log(this.userResetPassword);
      this.isLoginWrong = false;
      this.isWelcome = false;
      this.isLoginSuccess = false;
      this.isRegisterSuccess = false;
      this.isResetPassword = true;
    });
  }
}
