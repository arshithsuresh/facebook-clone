import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/model/stories/story.mode';

@Component({
  selector: 'app-story-card[data]',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss']
})
export class StoryCardComponent implements OnInit {

  @Input('data') storyData:Story = Story.initValue();
  constructor() { }

  ngOnInit(): void {
  }

}
