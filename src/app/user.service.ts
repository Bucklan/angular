import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  register(username: string, password: string): boolean {
    const hashedPassword = btoa(password);

    localStorage.setItem('password', hashedPassword);
    localStorage.setItem('username', username);
    return true;
  }

  login(username: string, password: string): boolean {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    return storedUsername === username && storedPassword ===  btoa(password);
  }

  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }
}
