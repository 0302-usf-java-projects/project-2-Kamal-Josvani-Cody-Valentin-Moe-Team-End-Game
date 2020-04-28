import { User } from './User';

export interface Post {
    id: number;
    user:User;
    created:string,
    updated:string,
	content:string,
    title:string,
    type:string,
    photoKey:string,
    numLikes:number

  }
  