import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  toLoginFunc() {
    this.toggle.emit();
  }
}
