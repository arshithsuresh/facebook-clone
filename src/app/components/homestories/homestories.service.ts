import {Injectable,  EventEmitter} from '@angular/core';
import { Story } from 'src/app/model/stories/story.mode';


@Injectable()
export class HomestoriesServices{

    nextStoryRequsted = new EventEmitter<Story>();

    constructor(){}

    getNextStory(){
    let mockStory = new Story(
        {id:2, name:"Kakashi Hanate", status:true,imgUrl:"assets/profile/kakashi.jpg"}, "assets/stories/kakashi1.jpg"
    );        
    this.nextStoryRequsted.emit(mockStory);
    }

}