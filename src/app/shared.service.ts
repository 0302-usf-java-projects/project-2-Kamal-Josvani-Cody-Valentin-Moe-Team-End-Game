import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();
  sendRefresh() {
    this.subject.next();
  }
  getRefresh(): Observable<any>{ 
    return this.subject.asObservable();
  }

  sendRefreshPost() {
    this.subject.next();
  }
  getRefreshPost(): Observable<any>{ 
    return this.subject.asObservable();
  }
}
