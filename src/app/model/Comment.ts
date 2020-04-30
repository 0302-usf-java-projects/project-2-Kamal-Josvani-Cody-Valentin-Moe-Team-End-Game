import { Post } from './Post';

export interface Comment {
    id: number;
    post:Post;
    created:string,
    content:string,
    firstname:string,
    lastname:string,
    user_id:number
  }