import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/model/Post';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.scss'],
})
export class ItemContainerComponent implements OnInit {
  posts:Post[];
  isOther:boolean = false;
  constructor(private postService:PostService,private sharedService:SharedService) {

    this.sharedService.getRefreshPost().subscribe(()=>{
      this.getmypost();
    });
    this.sharedService.getOtherPost().subscribe((id)=>{
      this.isOther = true;
      this.getOtherpost(id["id"]);
      console.log("look here");
    console.log(id["id"]);
    });
  }

  ngOnInit(): void {
    if(!this.isOther)
    this.getmypost();

  }

  getOtherpost(id){
    this.postService.getbyId(id).then(resp=>{
      console.log(resp);
      this.posts = resp.reverse();;
    })
  }

  getmypost(){
    let user = JSON.parse(localStorage.getItem("login"))
    
    this.postService.getbyId(user.id).then(resp=>{
      console.log(resp);
      this.posts = resp.reverse();;
    })
  }
}
