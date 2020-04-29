import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  set(user: User): Promise<User> {
    return this.http
      .post<User>('http://localhost:8080/Project_2_SpringFlowers/in.tony', user)
      .toPromise();
  }
  getById(id:number): Promise<User> {
    return this.http
      .get<User>(`http://localhost:8080/Project_2_SpringFlowers/${id}/getem.tony`)
      .toPromise();
  }

  update(user: User): Promise<User> {
    return this.http
      .post<User>('http://localhost:8080/Project_2_SpringFlowers/up.tony', user)
      .toPromise();
  }

  search(keyword: String): Promise<User[]> {
    return this.http
      .get<User[]>(`http://localhost:8080/Project_2_SpringFlowers/${keyword}/search.tony`)
      .toPromise();
  }
}
