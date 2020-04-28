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

    if (this.form.valid) {
      this.isLoading = !this.isLoading;
      console.log(this.form);
      setTimeout(() => {
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
