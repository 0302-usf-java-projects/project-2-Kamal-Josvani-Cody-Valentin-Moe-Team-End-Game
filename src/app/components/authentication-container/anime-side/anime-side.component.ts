import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-anime-side',
  templateUrl: './anime-side.component.html',
  styleUrls: ['./anime-side.component.scss'],
})
export class AnimeSideComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    particlesJS.load('anime-container', 'assets/particlesjs.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }
}
