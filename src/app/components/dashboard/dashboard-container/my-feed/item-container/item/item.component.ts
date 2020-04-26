import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import $ from "jquery";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  time: string;
  src_img="../../../../../../../assets/blank-profile-picture.png";
  userData:any;
  constructor() {
    this.time = moment().startOf('hour').fromNow();
    this.userData = JSON.parse(localStorage.getItem("login"));

    this.imageExists("https://projectendgame.s3.us-east-2.amazonaws.com/"+this.userData['id'].toString())
  }

  ngOnInit(): void {}


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
