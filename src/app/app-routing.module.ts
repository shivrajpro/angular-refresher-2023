import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // adding the wild card here will show page not found to all routes
  // {
  //   path:'**',
  //   component:PageNotFoundComponent 
  // },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'posts' 
  },
  {
    path:'posts',
    component: PostListComponent,
  },
  {
    path:'posts/post/:id',
    component:PostDetailComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
