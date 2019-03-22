import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getProfilePicUrl(): string {
    // todo - return user profile pic url
    return '../../../assets/images/user-placeholder.png';
  }
}
