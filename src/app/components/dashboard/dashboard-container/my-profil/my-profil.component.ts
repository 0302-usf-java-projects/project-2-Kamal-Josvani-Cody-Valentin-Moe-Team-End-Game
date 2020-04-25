import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UploadPhotoService } from 'src/app/services/upload-photo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.scss'],
})
export class MyProfilComponent implements OnInit {
  selectedFiles: FileList;
  src_img: string = 'https://projectendgame.s3.us-east-2.amazonaws.com/1';
  isLoading: boolean = false;
  form: FormGroup;
  constructor(
    private uploadPhoto: UploadPhotoService,
    private cdRef: ChangeDetectorRef,
    public register: FormBuilder,
    private user: UserService
  ) {
    let userdata = localStorage.getItem('login');
    userdata = JSON.parse(userdata);
    this.form = this.register.group({
      id: [userdata['id']],
      firstname: [userdata['firstname'], Validators.required],
      lastname: [userdata['lastname'], Validators.required],
      sex: [userdata['sex'], Validators.required],
      birthday: [userdata['birthday'], Validators.required],
      email: [userdata['email'], Validators.required],
      password: ["", Validators.required]
    });
  }

  ngOnInit(): void {}

  upload(event) {
    this.selectedFiles = event.target.files;
    const file = this.selectedFiles.item(0);
    this.uploadPhoto.uploadFile(file);
    setTimeout(() => {
      this.src_img =
        'https://projectendgame.s3.us-east-2.amazonaws.com/1?refresh';
    }, 2000);
  }

  submitMyProfil() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.isLoading = true;
      this.user.update(this.form.value).then((resp) => {
        console.log(resp);
        this.isLoading = false;
      });
    }
  }
}
