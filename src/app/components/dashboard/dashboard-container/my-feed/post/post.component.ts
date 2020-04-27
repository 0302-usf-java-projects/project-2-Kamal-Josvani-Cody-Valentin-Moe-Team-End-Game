import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/model/Post';
import { User } from 'src/app/model/User';
import * as moment from 'moment';
import { SharedService } from 'src/app/shared.service';
import { UploadPhotoService } from 'src/app/services/upload-photo.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  isLoading: boolean = false;
  textFormat: String;
  selectedFiles: FileList;
  public imagePath;
  imgURL: any;
  public message: string;
  @ViewChild("file") photo: ElementRef;
  type:string= "text";
  keyPhoto:string = "";
  constructor(private postService:PostService,private sharedService:SharedService,private uploadPhoto:UploadPhotoService) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.photo);
    if(this.photo.nativeElement.files.length != 0) {
      this.type = "photo";
    }
  }

  preview(files) {
    this.ngAfterViewInit()
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }


  generateKey() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }


  upload() {
    console.log(this.photo.nativeElement.files.length);
    if(this.photo.nativeElement.files.length != 0) {
    this.selectedFiles = this.photo.nativeElement.files;
    const file = this.selectedFiles.item(0);
    let key:string = this.generateKey();
    this.uploadPhoto.uploadFile(file,key);
    this.keyPhoto = key;
    }
  }

  post() {
    this.upload();
    this.isLoading = true;
    let user:User = JSON.parse(localStorage.getItem("login"))
    setTimeout(() => {
      let post:Post = {
        "id": 0,
        "user":user,
        "created":moment().format(),
        "updated":"",
      "content":this.textFormat.toString(),
      "title":"",
      "type":this.type,
      "photoKey":this.keyPhoto

      }
      this.postService.set(post).then((resp)=>{
        console.log(resp);
        this.sharedService.sendRefreshPost();
      })
      this.isLoading = false;
      console.log(this.textFormat);
    }, 1000);
  }
}
