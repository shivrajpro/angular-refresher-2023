import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-refresher-2023';
  isRed = true;
  textColor = 'blue';
  username:string = '';
  textValue:string = 'some text value';

  @ViewChild(PostComponent) childComp = null;

  constructor(){
    // console.log('>> constructor',this.childComp);
  }

  ngOnInit(): void {
    // console.log('>> ngOnInit',this.childComp);
  }

  ngAfterViewInit(): void {
    // console.log('>> ngAfterViewInit',this.childComp);
  }

  receiveMsg(evt:any){
    console.log('>> evt',evt);
  }

  onKeyUp(username:any){
    // if(evt.keyCode == 13) console.log('>> enter key pressed');
    console.log('>> enter key pressed',username.value);    
  }

  onKeyEnter(){
    // if(evt.keyCode == 13) console.log('>> enter key pressed');
    console.log('>> enter key pressed=', this.textValue);    
  }
}
