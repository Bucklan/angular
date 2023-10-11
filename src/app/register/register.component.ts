import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService,private router: Router) {}

  onSubmit(): void {
    if (this.userService.register(this.username, this.password)) {
      console.log('Registration successful');
      this.password = '';
      this.username = '';
      this.router.navigate(['/dashboard']);

    } else {
      console.log('Registration failed');
    }


  }
  toLogin(){
    this.router.navigate(['/login']);

  }
}
