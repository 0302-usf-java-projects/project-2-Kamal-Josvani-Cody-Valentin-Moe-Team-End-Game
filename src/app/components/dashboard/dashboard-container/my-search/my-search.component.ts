import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
declare var _: any;

@Component({
  selector: 'app-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.scss']
})
export class MySearchComponent implements OnInit {
  @ViewChild('keyword') keyword:ElementRef; 
  users:User[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  search(){
    if(this.keyword.nativeElement.value != "")
    this.userService.search(this.keyword.nativeElement.value).then((resp)=>{
      console.log(resp);
      if(!_.isEqual(resp,this.users)){
        this.users = resp;
      }
    })
  }

}
