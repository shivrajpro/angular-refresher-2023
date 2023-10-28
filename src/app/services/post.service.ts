import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class PostService {
  postList = [
    {
      id: 1,
      title: 'Post 1',
      detail:'Post 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis enim error beatae ipsam velit numquam illo consectetur facere ullam? 1'
    },
    {
      id: 2,
      title: 'Post 2',
      detail:'Post 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis enim error beatae ipsam velit numquam illo consectetur facere ullam? 2'
    },
    {
      id: 3,
      title: 'Post 3',
      detail:'Post 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perferendis enim error beatae ipsam velit numquam illo consectetur facere ullam? 3'
    },
  ];
}
