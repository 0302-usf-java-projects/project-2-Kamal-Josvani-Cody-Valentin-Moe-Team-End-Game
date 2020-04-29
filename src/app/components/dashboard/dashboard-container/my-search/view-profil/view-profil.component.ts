import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-view-profil',
  templateUrl: './view-profil.component.html',
  styleUrls: ['./view-profil.component.scss']
})
export class ViewProfilComponent implements OnInit {
  id:number;
  constructor(private router:Router,private route:ActivatedRoute,private sharedService:SharedService) { }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.queryParamMap.get('id'));
    this.sharedService.sendOtherPost(this.id);
  }

}
