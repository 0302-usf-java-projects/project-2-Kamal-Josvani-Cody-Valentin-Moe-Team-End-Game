import { Injectable } from '@angular/core';
import { Post } from '../model/Post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  set(post: Post): Promise<Post> {
    return this.http
      .post<Post>('http://localhost:8080/Project_2_SpringFlowers/addpo.tony', post)
      .toPromise();
  }

  getbyId(id: number): Promise<Post[]> {
    return this.http
      .get<Post[]>(`http://localhost:8080/Project_2_SpringFlowers/${id.toString()}/getpo.tony`)
      .toPromise();
  }

  update(post: Post): Promise<Post> {
    return this.http
      .post<Post>(`http://localhost:8080/Project_2_SpringFlowers/uppo.tony`,post)
      .toPromise();
  }
}
