import {Component} from '@angular/core'
import {UserService} from "../user.service";
import {Router} from "@angular/router";
@Component({
  selector: 'first-project',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.css']
})
export class FirstTaskComponent {
  tasks: {
    name: string;
    completed: boolean
  }[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  destroyTask(task:
                { name: string; completed: boolean }
  ) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  constructor(private userService: UserService,private router: Router) {}
  logout(): void {
    this.userService.logout();
    console.log('Logged out');
    this.router.navigate(['/login']);
  }
}
