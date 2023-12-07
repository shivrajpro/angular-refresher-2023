import { Component } from '@angular/core';
import { Role } from '../models/role';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  Role = Role;
}
