import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../model/Comment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {

  }


  set(comment: Comment): Promise<Comment> {
    return this.http
      .post<Comment>(environment.base_url+'insertComment.tony', comment)
      .toPromise();
  }

  getByPostId(id: number): Promise<Comment[]> {
    return this.http
      .get<Comment[]>(environment.base_url+`${id}/getComment.tony`)
      .toPromise();
  }
}
