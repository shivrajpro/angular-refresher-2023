import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  postArr:any = null;

  constructor(postService: PostService, route:ActivatedRoute){
    // const postService = new PostService();
    this.postArr = postService.postList;

    route.queryParamMap.subscribe((queryParams)=>{
      console.log('>> q',queryParams);
      
    })
  }

}
