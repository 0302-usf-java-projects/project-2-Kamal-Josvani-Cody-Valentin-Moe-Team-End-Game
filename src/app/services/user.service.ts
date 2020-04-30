import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  set(user: User): Promise<User> {
    return this.http
      .post<User>(environment.base_url+'in.tony', user)
      .toPromise();
  }



  getById(id:number): Promise<User> {
    return this.http
      .get<User>(environment.base_url+`${id}/getem.tony`)
      .toPromise();
  }

  update(user: User): Promise<User> {
    return this.http
      .post<User>(environment.base_url+'/up.tony', user)
      .toPromise();
  }

  search(keyword: String): Promise<User[]> {
    return this.http
      .get<User[]>(environment.base_url+`${keyword}/search.tony`,)
      .toPromise();
  }

  resetPassword(email: String): Promise<any> {
    return this.http
      .get(environment.base_url+`${email}/updatepass.tony`,{ responseType: "text"}).toPromise();
  }
}
