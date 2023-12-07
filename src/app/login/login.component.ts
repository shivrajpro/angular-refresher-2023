import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Role } from '../models/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Role = Role;
  constructor(private router: Router, private authService: AuthService) { }
  login(role: Role) {
    this.authService.login(role);
    this.router.navigate(['/']);
  }
}
