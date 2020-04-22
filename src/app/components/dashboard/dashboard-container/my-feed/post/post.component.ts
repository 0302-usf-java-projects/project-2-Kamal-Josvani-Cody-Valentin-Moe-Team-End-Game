import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  isLoading: boolean = false;
  textFormat: String;
  constructor() {}

  ngOnInit(): void {}

  post() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log(this.textFormat);
    }, 2000);
  }
}
