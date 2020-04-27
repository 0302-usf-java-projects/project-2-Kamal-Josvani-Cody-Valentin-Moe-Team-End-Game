import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  isLoading: boolean = false;
  form: FormGroup;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    public register: FormBuilder
  ) {
    this.form = this.register.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    localStorage.getItem('login') == 'false'
      ? ''
      : this.router.navigateByUrl('/dashboard/(my:feed)');
  }

  toRegisterFunc() {
    this.toggle.emit();
  }

  login() {
    let user = {
      id:"",
      birthday:"",
      email:"",
      firstname:"",
      lastname:"",
      password:"",
      sex:"",
    }

    if (this.form.valid) {
      this.isLoading = !this.isLoading;
      console.log(this.form);
      setTimeout(() => {
        this.isLoading = true;
        this.authService.authMe(this.form.value.email,this.form.value.password).then((resp) => {
          if(resp != null){
            user.id = resp[0];
            user.birthday = resp[1];
            user.email = resp[2];
            user.firstname = resp[3];
            user.lastname = resp[4];
            user.password = resp[5];
            user.sex =  resp[6];
            localStorage.setItem("login",JSON.stringify(user))
            this.router.navigateByUrl('/dashboard/(my:feed)');
          } else {
            localStorage.setItem("login","false");
          }
          console.log(resp);
          this.isLoading = false;
        });
        this.isLoading = false;
      }, 1000);
    }



  /*  let user = {
      id: 1,
      firstname: 'kamal',
      lastname: 'ait sidhoum',
      sex: '1',
      email: 'kamalaitsidhofffggum@gmail.com',
      birthday: '05/14/1994',
      password: 'password',
    }; */
    //localStorage.setItem('user', JSON.stringify(user));

  }

  onSubmit(event: Event) {
    event.preventDefault();
  }
}
