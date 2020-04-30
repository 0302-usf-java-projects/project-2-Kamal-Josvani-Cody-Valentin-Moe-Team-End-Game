import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { SharedService } from 'src/app/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  isLoading: boolean = false;
  errorLogin:boolean = false;
  form: FormGroup;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    public register: FormBuilder,
    private sharedService:SharedService,
    public dialog: MatDialog
  ) {
    this.form = this.register.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    JSON.parse(localStorage.getItem('login'))== null
      ? ''
      : this.router.navigateByUrl('/dashboard/(my:feed)');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  toRegisterFunc() {
    this.toggle.emit();
  }

  login() {
    if (this.form.valid) {
      this.isLoading = !this.isLoading;
      console.log(this.form);
        this.isLoading = true;
        this.authService.authMe(this.form.value.email,this.form.value.password).then((resp) => {
          console.log(resp);
          if(resp != null){
            let user:User = {
              id:resp[0],
              address:resp[1],
              birthday:resp[2],
              education: resp[3],
              email:resp[4],
              firstname:resp[5],
              lastname:resp[6],
              password:resp[7],
              phone:resp[8],
              sex:resp[9],
              work:resp[10]
            };//bad practice :(

            localStorage.setItem("login",JSON.stringify(user));
            this.sharedService.sendSuccessLogin();
            setTimeout(() => { //emulate
              this.router.navigateByUrl('/dashboard/(my:feed)');
            }, 2000);
          } else {
            console.log("wrong login");
            this.sharedService.sendWrongLogin();
            localStorage.setItem("login",null);
          }
          console.log(resp);
          this.isLoading = false;
        });
    }

  }

  onSubmit(event: Event) {
    event.preventDefault();
  }
}
