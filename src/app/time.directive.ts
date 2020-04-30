import { Directive, Input, ElementRef } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appTime]'
})
export class TimeDirective {
  @Input('appTime') time: string;

  constructor(private el: ElementRef) {
    

  }

  ngOnInit() {
    this.el.nativeElement.innerHTML = moment(this.time).fromNow();
    
  }


  private timeString(time: string) {
    console.log(this.el.nativeElement);
    console.log(time);
  }

}
