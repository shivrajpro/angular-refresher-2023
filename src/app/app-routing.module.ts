import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { Role } from './models/role';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    children:[
      { path:'', component: HomeComponent },
      { path:'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path:'login', component: LoginComponent },
    ],
  },
  {
    path: 'admin',
    canLoad:[AuthGuard],
    canActivate:[AuthGuard],
    data:{
      roles:[Role.Admin]
    },
    loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard, AuthService]
})
export class AppRoutingModule { }
