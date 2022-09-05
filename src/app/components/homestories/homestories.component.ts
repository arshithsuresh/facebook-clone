import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Story } from 'src/app/model/stories/story.mode';

@Component({
  selector: 'app-homestories',
  templateUrl: './homestories.component.html',
  styleUrls: ['./homestories.component.scss'],
  
})
export class HomestoriesComponent implements OnInit,AfterViewInit {

  @ViewChild('viewer', {static:true}) storyviwer? : ElementRef;
  stories: Story[];
  page:number =0;
  dragX:number = 0;
  constructor() {
    this.stories = Story.getMockStories();
  }
  onNextStorySet(){
    this.page +=1;
  }
  onPrevStorySet(){
    this.page =Math.max(this.page-1, 0);
    
  }
  ngOnInit(): void {
    console.log(this.storyviwer?.nativeElement.offsetWidth);
  }

  ngAfterViewInit(): void {
    console.log(this.storyviwer?.nativeElement.offsetWidth);
  }

}
