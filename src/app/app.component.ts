import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(PostComponent) childComp = null;

  postArr = new Array<string>;
  stepName = '';
  isActive = true;
  constructor(){
    // console.log('>> constructor',this.childComp);
  }

  ngOnInit(): void {
    // console.log('>> ngOnInit',this.childComp);
  }

  ngAfterViewInit(): void {
    // console.log('>> ngAfterViewInit',this.childComp);
  }

  onAddPost(){
    const len = this.postArr.length + 1;
    this.postArr.push(`post${len}`)
  }

  onDeletePost(index:number){
    this.postArr.splice(index,1);
  }

  onStepClick(step:string){
    this.stepName = step;
  }

}
