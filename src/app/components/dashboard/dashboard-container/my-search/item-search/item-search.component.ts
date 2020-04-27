import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent implements OnInit {
  src_img="../../../../../../../assets/blank-profile-picture.png";

  constructor(private router:Router,private route: ActivatedRoute) {

    this.imageExists("https://projectendgame.s3.us-east-2.amazonaws.com/14")

  }

  ngOnInit(): void {
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

goToProfil() {
 // this.router.navigate(['/viewprofil']);
  this.router.navigate(['../viewprofil'],{queryParams:{id:14},relativeTo: this.route,});

}

}
