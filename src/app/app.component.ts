import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  showPara:boolean = false;
  @ViewChild(PostComponent) childComp = null;

  decVal = 3.85674;
  constructor(private router: Router) {
    // console.log('>> constructor',this.childComp);
  }

  ngOnInit(): void {
    // console.log('>> ngOnInit',this.childComp);
  }

  ngAfterViewInit(): void {
    // console.log('>> ngAfterViewInit',this.childComp);
  }

  onSubmit() {
    // this.router.navigate(['posts/post', 1]);
    this.router.navigate(['posts'], {
      queryParams: { page: 1, orderBy: 'title' },
    });
  }
}
