import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Role } from '../models/role';

@Injectable()
export class AuthService {
    private user!: User;

    isAuthorized() {
        const user = localStorage.getItem('user');
        if(user) this.user = user as any;

        return !!this.user;
    }

    hasRole(role: Role) {
        return this.isAuthorized() && this.user.role === role;
    }

    login(role: Role) {
      localStorage.setItem("user","abcd");
      this.user = { role: role };
    }

    logout() {
      localStorage.clear();
      this.user = null!;
    }
}
