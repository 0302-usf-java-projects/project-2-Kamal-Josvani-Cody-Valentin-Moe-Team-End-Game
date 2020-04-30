import { Injectable } from '@angular/core';
import { Post } from '../model/Post';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  set(post: Post): Promise<Post> {
    return this.http
      .post<Post>(environment.base_url+'addpo.tony', post)
      .toPromise();
  }

    //allposts.tony

  getAll(): Promise<Post[]> {
      return this.http
        .get<Post[]>(environment.base_url+`allposts.tony`)
        .toPromise();
  }

  getbyId(id: number): Promise<Post[]> {
    return this.http
      .get<Post[]>(environment.base_url+`${id.toString()}/getpo.tony`)
      .toPromise();
  }

  update(post: Post): Promise<Post> {
    return this.http
      .post<Post>(environment.base_url+`uppo.tony`,post)
      .toPromise();
  }
}
