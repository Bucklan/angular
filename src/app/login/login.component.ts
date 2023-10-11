import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService,private router: Router) {}

  onSubmit(): void {
    if (this.userService.login(this.username, this.password)) {
      this.router.navigate(['/dashboard']);
      this.password = '';
      this.username = '';
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }
  toRegister(){
    this.router.navigate(['/register']);

  }
}
