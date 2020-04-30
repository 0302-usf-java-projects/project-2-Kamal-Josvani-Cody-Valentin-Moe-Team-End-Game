import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private RefreshSubject = new Subject<any>();
  private RefreshPostSubject = new Subject<any>();
  private OtherPostSubject = new Subject<any>();
  private WrongLoginSubject = new Subject<any>();
  private SuccessLoginSubject = new Subject<any>();
  private SuccessRegisterSubject = new Subject<any>();
  private ResetPasswordSubject = new Subject<any>();

  sendRefresh() {
    this.RefreshSubject.next();
  }
  getRefresh(): Observable<any>{ 
    return this.RefreshSubject.asObservable();
  }

  sendRefreshPost() {
    this.RefreshPostSubject.next();
  }
  getRefreshPost(): Observable<any>{ 
    return this.RefreshPostSubject.asObservable();
  }

  sendOtherPost(id) {
    this.OtherPostSubject.next({ id: id });
  }
  getOtherPost(): Observable<any>{ 
    return this.OtherPostSubject.asObservable();
  }

  sendWrongLogin(){
    this.WrongLoginSubject.next();
  }
  getWrongLogin(): Observable<any>{
    return this.WrongLoginSubject.asObservable();
  }
  sendSuccessLogin(){
    this.SuccessLoginSubject.next();
  }
  getSuccessLogin(): Observable<any>{
    return this.SuccessLoginSubject.asObservable();
  }
  sendSuccessRegister(firstname:string){
    this.SuccessRegisterSubject.next({ firstname: firstname });
  }
  getSuccessRegister(): Observable<any>{
    return this.SuccessRegisterSubject.asObservable();
  }
  sendResetPassword(resp:String){
    this.ResetPasswordSubject.next({ resp: resp });
  }
  getResetPassword(): Observable<any>{
    return this.ResetPasswordSubject.asObservable();
  }
}
