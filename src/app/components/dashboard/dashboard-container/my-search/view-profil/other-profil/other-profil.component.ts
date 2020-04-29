import { Component, OnInit, Input } from '@angular/core';
import $ from "jquery";
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-other-profil',
  templateUrl: './other-profil.component.html',
  styleUrls: ['./other-profil.component.scss']
})
export class OtherProfilComponent implements OnInit {
  @Input("id") id:number;
  user:User;
  src_img="../../../../../../../assets/blank-profile-picture.png";

  constructor(private userService:UserService) {

   }

  ngOnInit(): void {
    console.log("HERREE")
    console.log(this.id)
    this.userService.getById(this.id).then(resp=>{
      console.log("HERREE")
      console.log(resp);
      this.user = resp;
      this.imageExists("https://projectendgame.s3.us-east-2.amazonaws.com/"+this.user.id);

    })
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
