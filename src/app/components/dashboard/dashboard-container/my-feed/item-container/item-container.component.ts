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
  constructor(private postService:PostService,private sharedService:SharedService) {
    this.sharedService.getRefreshPost().subscribe(()=>{
      this.getpost();
    })
  }

  ngOnInit(): void {
    this.getpost();
  }

  getpost(){
    let user = JSON.parse(localStorage.getItem("login"))
    
    this.postService.getbyId(user.id).then(resp=>{
      console.log(resp);
      this.posts = resp.reverse();;
    })
  }
}
