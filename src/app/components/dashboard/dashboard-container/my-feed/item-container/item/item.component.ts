import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import $ from "jquery";
import { Post } from 'src/app/model/Post';
import { Comment } from 'src/app/model/Comment';

import { SharedService } from 'src/app/shared.service';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from 'src/app/services/comment.service';
import { stringify } from 'querystring';

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
  commentText:string;
  comments:Comment[];
  constructor(private postServer:PostService,private commentService:CommentService) {


   // 
    this.userData = JSON.parse(localStorage.getItem("login"));

  }

  ngOnInit(): void {
    this.time = moment(this.post["created"]).fromNow();
    console.log(this.post);
    this.getComment();    
  }

  postComment(){
    let comment:Comment = {
      id:1,
      post:this.post,
      created:moment().format(),
      content:this.commentText,
      firstname:this.userData.firstname,
      lastname:this.userData.lastname,
      user_id:this.userData.id
    }
    this.commentService.set(comment).then((res)=>{
      this.getComment();
    })
  }

  

  getComment(){
    this.commentService.getByPostId(this.post.id).then((res)=>{
      console.log(res);
      this.comments = res;
    })
  }





toggleLike() {
  this.isLiked = !this.isLiked;
  this.isLiked ? this.post.numLikes++ : this.post.numLikes--;
  console.log(this.post);
  this.postServer.update(this.post).then((resp)=>{
    console.log(resp);
  })
}
}
