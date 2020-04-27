import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-other-profil',
  templateUrl: './other-profil.component.html',
  styleUrls: ['./other-profil.component.scss']
})
export class OtherProfilComponent implements OnInit {
  src_img="../../../../../../../assets/blank-profile-picture.png";

  constructor() {
    this.imageExists("https://projectendgame.s3.us-east-2.amazonaws.com/14");

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

}
