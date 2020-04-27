import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import $ from "jquery";
import { Post } from 'src/app/model/Post';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input('post') post: Post;
  time: string;
  src_img="../../../../../../../assets/blank-profile-picture.png";
  userData:any;
  isLiked:boolean=false;
  numberOfLike :number=0;
  constructor() {


   // 
    this.userData = JSON.parse(localStorage.getItem("login"));

    this.imageExists("https://projectendgame.s3.us-east-2.amazonaws.com/"+this.userData['id'].toString())
  }

  ngOnInit(): void {
    this.time = moment(this.post["created"]).fromNow();
    console.log(this.post);
  }


  imageExists(image_url){

    $.get(image_url)
    .done(()=> { 
      console.log("exist");
        this.src_img = image_url;
    }).fail(()=> { 
      console.log("dont exist");
      this.src_img = "../../../../../../../assets/blank-profile-picture.png";
    })

}


toggleLike() {
      this.isLiked = !this.isLiked;
      this.isLiked ? this.numberOfLike++ : this.numberOfLike--;
}
}
