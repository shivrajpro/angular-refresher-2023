import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  constructor(private route: ActivatedRoute){
    route.paramMap.subscribe((params)=>{
      console.log('>> p',params);
    })
  }
}
