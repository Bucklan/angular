import {Component, Input} from '@angular/core';
import {Post} from "../post.model";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  public post : Post[] = [];
 @Input() posts: Post[] = [
  {title: 'First Post',done: false},
  {title: 'Second Post',done: false},
  {title: 'Third Post',done: false},
  ];
 //  @Input() posts = [];
}
