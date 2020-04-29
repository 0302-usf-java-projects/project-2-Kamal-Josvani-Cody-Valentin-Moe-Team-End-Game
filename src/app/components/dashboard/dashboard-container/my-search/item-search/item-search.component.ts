import { Component, OnInit, Input } from '@angular/core';
import $ from "jquery";
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {
  @Input("user") user:User;
  src_img="../../../../../../../assets/blank-profile-picture.png";

  constructor(private router:Router,private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.imageExists("https://projectendgame.s3.us-east-2.amazonaws.com/"+this.user.id)
  }


  imageExists(image_url){

    $.get(image_url)
    .done(()=> { 
        this.src_img = image_url;
    }).fail(()=> { 
      console.log("dont exist");
      this.src_img = "../../../../../../../assets/blank-profile-picture.png";
    })

}

goToProfil() {
 // this.router.navigate(['/viewprofil']);
  this.router.navigate(['../viewprofil'],{queryParams:{id:this.user.id},relativeTo: this.route});

}

}
