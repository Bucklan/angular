import {Component /*EventEmitter, Output*/} from '@angular/core';
import {Post} from "../post.model";

@Component({
  selector: 'post-destroy-create',
  templateUrl: './post-destroy.component.html',
  styleUrls: ['./post-destroy.component.css'],
})
export class PostDestroyComponent {
  public post : Post[] = [];
  removeTask(index: number){
    this.post.splice(index,1);
  }
}
