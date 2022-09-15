import { formatDate } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/model/posts/post';
import { PostServices } from './post.service';

@Component({
  selector: 'app-post[data]',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Output() postMediaClick = new EventEmitter<Post>();
  @Input('data') postData?:Post;
  @Input('index') index:number=0;

  liked:boolean = false;
  viewComments:boolean = true;

  
  constructor(private postService: PostServices) { }

  onCommentsClick():void{
    this.viewComments = !this.viewComments;
  }

  getDate():string{
    if(this.postData){
      let createdDate = Date.parse(this.postData.created_at);
      return formatDate(createdDate, 'dd-MM-yyyy hh:mm', 'en-US', '+0530')
    }
    return "unknown time";
  }
  onImageClicked(){
    console.log('onImageClicked');
    this.postMediaClick.emit(this.postData);
  }

  onLike(){
    if(this.postData)
    {
      this.liked = !this.liked;
      if(this.liked)
      {
        //this.postData.likes = this.postData.likes+1;
        this.postService.likePost(this.index);
      }
      else
      {
        this.postService.unLikePost(this.index);        
        //this.postData.likes = this.postData.likes-1;
      }
    }
  }
  
  hasMedia(): boolean{
    if(!this.postData?.media || this.postData?.media?.length==0)
      return false;
    return true;
  }

  getMedia(): any{
    return this.postData?.media?.at(0)?.url;
  }


  ngOnInit(): void {
  }

}
