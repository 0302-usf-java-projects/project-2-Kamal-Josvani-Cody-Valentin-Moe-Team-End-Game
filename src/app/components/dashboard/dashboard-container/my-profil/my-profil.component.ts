import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UploadPhotoService } from 'src/app/services/upload-photo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import $ from "jquery";
import { SharedService } from 'src/app/shared.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.scss'],
})
export class MyProfilComponent implements OnInit {
  selectedFiles: FileList;
  src_img: string = '';
  isLoading: boolean = false;
  form: FormGroup;
  userData:User;
  constructor(
    private uploadPhoto: UploadPhotoService,
    public register: FormBuilder,
    private user: UserService,
    private sharedService:SharedService
  ) {
    this.userData = JSON.parse(localStorage.getItem('login'));
    this.form = this.register.group({
      id: [this.userData['id']],
      firstname: [this.userData['firstname'], Validators.required],
      lastname: [this.userData['lastname'], Validators.required],
      sex: [this.userData['sex'], Validators.required],
      birthday: [this.userData['birthday'], Validators.required],
      email: [this.userData['email'], Validators.required],
      password: [""],
      phone: [this.userData['phone']],
      education: [this.userData['education']],
      address: [this.userData['address']],
      work: [this.userData['work']],

    });
    this.imageExists("https://projectendgame.s3.us-east-2.amazonaws.com/"+this.userData['id'].toString());

  }

  imageExists(image_url){

    $.get(image_url)
    .done(()=> { 
      console.log("exist");
        this.src_img = image_url;
    }).fail(()=> { 
      console.log("dont exist");
      this.src_img = "../../../../../assets/blank-profile-picture.png";
    })

}

  ngOnInit(): void {}

  upload(event) {
    this.selectedFiles = event.target.files;
    const file = this.selectedFiles.item(0);
    this.uploadPhoto.uploadFile(file,this.userData["id"].toString());
    setTimeout(() => {
      this.src_img =
        'https://projectendgame.s3.us-east-2.amazonaws.com/'+this.userData["id"].toString()+"?"+Date.now().toString;
         this.sharedService.sendRefresh();
    }, 2000);
  }

  submitMyProfil() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.isLoading = true;
      this.user.update(this.form.value).then((resp) => {
        console.log(resp);
        localStorage.setItem("login",JSON.stringify(resp));
        this.sharedService.sendRefresh();
        this.isLoading = false;
      });
    }
  }
}
