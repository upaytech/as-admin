import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  dpUrl: string;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.dpUrl = this.userService.getProfilePicUrl();
  }

}
