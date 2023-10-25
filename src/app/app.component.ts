import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(PostComponent) childComp = null;

  userList = new Array<any>;
  username = '';
  email = '';
  address = '';

  constructor(){
    // console.log('>> constructor',this.childComp);
  }

  ngOnInit(): void {
    // console.log('>> ngOnInit',this.childComp);
  }

  ngAfterViewInit(): void {
    // console.log('>> ngAfterViewInit',this.childComp);
  }

  onAddUser(){
    this.userList.push({ username: this.username,email:this.email,address:this.address})
  }

  onDeleteUser(index:any){
    this.userList.splice(index,1);
  }
}
