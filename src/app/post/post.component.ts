import { Component, EventEmitter, Output } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // providers: [PostService]
})
export class PostComponent {
  postArr:any =  null;

  constructor(postService: PostService){
    // const postService = new PostService();
    this.postArr = postService.postList;
  }
}
