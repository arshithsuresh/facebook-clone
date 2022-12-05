import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewChecked} from '@angular/core';
import { Story } from 'src/app/model/stories/story.mode';
import { LoggingService } from 'src/app/services/logging/logging.service';
import { HomestoriesServices } from './homestories.service';

@Component({
  selector: 'app-homestories',
  templateUrl: './homestories.component.html',
  styleUrls: ['./homestories.component.scss'],
  providers: [HomestoriesServices]
  
})
export class HomestoriesComponent implements OnInit,AfterViewChecked {

  @ViewChild('viewer', {static:true}) storyviwer? : ElementRef;
  stories: Story[];
  page:number =0;
  dragX:number = 0;
  constructor(private renderer:Renderer2, private loggingService:LoggingService, private homeStoriesService:HomestoriesServices) {
    this.stories = Story.getMockStories();    
  }
  onNextStorySet(){
    this.page +=1;
    this.dragX = -this.page*154;
    this.loggingService.logInformation("Test Message");
    this.homeStoriesService.getNextStory();
    //this.stories = this.stories.slice(1);
    
  }
  onPrevStorySet(){
    this.page =Math.max(this.page-1, 0);
    this.dragX = -this.page*154;    
  }

  ngOnInit(): void {
    console.log(this.storyviwer?.nativeElement.offsetWidth);  
    this.homeStoriesService.nextStoryRequsted.subscribe((story)=>this.stories.push(story));  
  }

  ngAfterViewChecked(): void {
    this.renderer.setStyle(this.storyviwer?.nativeElement,"transform", `translateX(${this.dragX}px)` );
  }

}
