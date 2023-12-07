import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(private router: Router) {
    // console.log('>> constructor',this.childComp);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
