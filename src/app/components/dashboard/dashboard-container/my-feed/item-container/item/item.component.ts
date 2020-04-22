import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  time: string;
  constructor() {
    this.time = moment().startOf('hour').fromNow();
  }

  ngOnInit(): void {}
}
