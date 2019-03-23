import { Component, OnInit } from '@angular/core';
import { User } from '../common/model/user';
import { UserService } from '../common/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.user.firstName = 'Guest';
    this.user.lastName = 'User';
  }



}
