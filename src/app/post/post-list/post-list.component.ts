import { Component, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  postArr:any = null;

  constructor(postService: PostService){
    // const postService = new PostService();
    this.postArr = postService.postList;
  }

}
