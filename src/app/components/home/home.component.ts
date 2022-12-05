import { Component, OnInit } from '@angular/core';
import { AdsSponsored } from 'src/app/model/ads/ads.model';
import { Post } from 'src/app/model/posts/post';
import { User } from 'src/app/model/user/user.model';
import { PostServices } from '../post/post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PostServices],
})
export class HomeComponent implements OnInit {
  testUser: User = { id: 123, name: 'username', status: true };
  posts: Post[] = [];
  adsData: AdsSponsored = AdsSponsored.getMockAd();
  chatContacts: User[] = User.getMockContacts();

  viewPost: boolean = false;
  selectedPost?: Post;

  constructor(private postService: PostServices) {}

  ngOnInit(): void {
    console.log('Home Component INIT');
    this.posts = this.postService.getPosts();
    this.postService.postsUpdated.subscribe((posts) => (this.posts = posts));
  }

  selectPost(post: Post) {
    this.viewPost = true;
    this.selectedPost = post;
  }
}
