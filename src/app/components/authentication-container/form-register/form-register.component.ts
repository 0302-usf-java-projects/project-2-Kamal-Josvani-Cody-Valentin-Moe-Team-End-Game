import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../model/User';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  isLoading: boolean = false;
  form: FormGroup;
  constructor(public register: FormBuilder, private user: UserService) {
    this.form = this.register.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      sex: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  toLoginFunc() {
    this.toggle.emit();
  }

  submitForm() {
    console.log(this.form);
    if (this.form.valid) {
      this.isLoading = true;
      this.user.set(this.form.value).then((resp) => {
        console.log(resp);
        this.isLoading = false;
        this.toLoginFunc();
      });
    }
  }
}
