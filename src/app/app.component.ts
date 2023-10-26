import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(PostComponent) childComp = null;

  decVal = 3.85674;
  constructor(){
    // console.log('>> constructor',this.childComp);
  }

  ngOnInit(): void {
    // console.log('>> ngOnInit',this.childComp);
  }

  ngAfterViewInit(): void {
    // console.log('>> ngAfterViewInit',this.childComp);
  }

}
