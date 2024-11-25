import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);

  getUserName(users: User[]): string[] {
    return users.map(user => user.name);
  }

  getUserList() {
    return this.http.get('http://localhost:3004')
  }
}
