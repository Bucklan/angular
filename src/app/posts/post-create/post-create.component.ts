import {Component, EventEmitter, Output} from '@angular/core';
import {Post} from "../post.model";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredBoolean = false;
 @Output()  postCreated = new EventEmitter<Post>();
  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      done: false,
    }
    this.postCreated.emit(post);
  }
}
