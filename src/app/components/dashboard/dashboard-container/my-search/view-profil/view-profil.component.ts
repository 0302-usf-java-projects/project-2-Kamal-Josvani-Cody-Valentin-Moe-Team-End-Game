import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-profil',
  templateUrl: './view-profil.component.html',
  styleUrls: ['./view-profil.component.scss']
})
export class ViewProfilComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap.get('id'));
    
  }

}
