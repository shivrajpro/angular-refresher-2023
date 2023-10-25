import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  postsList = "message from post component"
  outputChildMsg = "message from post via Output";

  @Output() msgEvt = new EventEmitter<String>();

  postTitle = '';
  imgUrl = '';
  postDetails = '';
  postUrl = '';
  hasBg = false;

  sendMsg(){
    this.msgEvt.emit(this.outputChildMsg);
  }
}
