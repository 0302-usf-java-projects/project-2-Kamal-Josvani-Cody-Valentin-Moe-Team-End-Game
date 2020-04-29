import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-my-feed',
  templateUrl: './my-feed.component.html',
  styleUrls: ['./my-feed.component.scss']
})
export class MyFeedComponent implements OnInit {

  constructor(private postService:PostService,private sharedService:SharedService) {
    
  }

  ngOnInit(): void {
  }

}
