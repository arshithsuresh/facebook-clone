import { User } from "../user/user.model";

export class Story{
    constructor(public user: User, public imgUrl:string){

    }

    public static initValue():Story{
        return {user: {id:0, name:"Loading...", status:false}, imgUrl:"assets/stories/image1.jpg"}
        
    }

    public static getMockStories() : Story[]{
        return [
            {user: {id:1, name:"Naruto Uzamaki", status:true,imgUrl:"assets/profile/naruto.png"}, imgUrl:"assets/stories/naruto1.jpg"},
            {user: {id:2, name:"Kakashi Hanate", status:true,imgUrl:"assets/profile/kakashi.jpg"}, imgUrl:"assets/stories/kakashi1.jpg"},
            {user: {id:3, name:"Sakura Haruo", status:true,imgUrl:"assets/profile/sakura.jpg"}, imgUrl:"assets/stories/sakura1.jpg"},
            {user: {id:4, name:"Goku Kakarot", status:true,imgUrl:"assets/profile/goku.jpg"}, imgUrl:"assets/stories/goku1.jpg"},
            {user: {id:4, name:"Goku Kakarot", status:true,imgUrl:"assets/profile/goku.jpg"}, imgUrl:"assets/stories/goku1.jpg"},
            {user: {id:4, name:"Goku Kakarot", status:true,imgUrl:"assets/profile/goku.jpg"}, imgUrl:"assets/stories/goku1.jpg"}
        ];
    }
}
