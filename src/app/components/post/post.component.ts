import { formatDate } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/model/posts/post';

@Component({
  selector: 'app-post[data]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Output() postMediaClick = new EventEmitter<Post>();
  @Input('data') postData?: Post;
  @Input('index') index?: number;

  liked: boolean = false;
  viewComments: boolean = false;

  onCommentsClick(): void {
    this.viewComments = !this.viewComments;
  }

  getDate(): string {
    if (this.postData) {
      let createdDate = Date.parse(this.postData.created_at);
      return formatDate(createdDate, 'dd-MM-yyyy hh:mm', 'en-US', '+0530');
    }
    return 'unknown time';
  }
  onImageClicked() {
    console.log('onImageClicked');
    this.postMediaClick.emit(this.postData);
  }

  onLike() {
    if (this.postData) {
      this.liked = !this.liked;
      if (this.liked) this.postData.likes = this.postData.likes + 1;
      else this.postData.likes = this.postData.likes - 1;
    }
  }

  hasMedia(): boolean {
    if (!this.postData?.media || this.postData?.media?.length == 0)
      return false;
    return true;
  }

  getMedia(): any {
    return this.postData?.media?.at(0)?.url;
  }

  constructor() {}

  ngOnInit(): void {}
}
