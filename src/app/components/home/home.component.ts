import { Component, OnInit } from '@angular/core';
import { AdsSponsored } from 'src/app/model/ads/ads.model';
import { Post } from 'src/app/model/posts/post';
import { User } from 'src/app/model/user/user.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  testUser :User={id: 123 , name: 'username',status:true};
  posts: Post[] = Post.getMockPosts();
  adsData: AdsSponsored=  AdsSponsored.getMockAd();
  chatContacts:User[] = User.getMockContacts();

  viewPost:boolean = false;
  selectedPost?:Post;

  constructor() { }

  ngOnInit(): void {
    console.log("Home Component INIT");
  }

  selectPost(post:Post) {
   this.viewPost = true;
   this.selectedPost = post;
  }

}
