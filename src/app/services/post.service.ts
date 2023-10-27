import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class PostService {
  postList = [
    {
      id: 1,
      title: 'Post 1',
    },
    {
      id: 2,
      title: 'Post 2',
    },
    {
      id: 3,
      title: 'Post 3',
    },
  ];
}
