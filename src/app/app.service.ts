import { inject, Injectable } from '@angular/core';
import { UserService } from './user.service';
export interface User {
  name: string;
  id: string;
}
@Injectable({
  providedIn: 'root'
})
export class AppService {
  userList: User[] = [];
  userService = inject(UserService);

  addUser(user: User) {
    this.userList.push(user);
  }

  removeUser(id: string) {
    this.userList = this.userList.filter(user => user.id !== id);
  }

  getUserName(id: string) {
    return this.userService.getUserName(this.userList);
  }

}
