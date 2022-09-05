import { User } from "../user/user.model";

export class Post{
    
    constructor(public id:number,public user: User, public sponsored:boolean,
        public content:string,public created_at:string,
        public likes:number,public comments:number,
        public tags?:string[],public media?:{type: string, url: string }[]){

        }

    static getMockPosts():Post[]{
        return [
            {id:1, sponsored:false, content:"Oh yeaaahhh!! Sage mode is awesome. There is no stopong me now!",
            comments:12, likes:126,created_at:"2022-04-01T10:00:00.000Z",tags:["naruto","hokage", "sagemode"],
            media:[{type:"img",url:"assets/post-images/narutosage.jpg"},
            ],
            user: {id:1, name:"Naruto Uzamaki", status:true,imgUrl:"assets/profile/naruto.png"}},

            {id:2, sponsored:false, content:"Team 07. Glad to be in Sasuke's Team. ",
            comments:122, likes:12084,created_at:"2022-04-01T10:00:00.000Z",tags:["team07","ninjatraining", "lucky"],
            media:[{type:"img",url:"assets/post-images/sakura.jpg"},
            ],
            user: {id:1, name:"Sakura Haruno", status:true,imgUrl:"assets/profile/sakura.jpg"}},

            {id:3, sponsored:false, content:"Hope my new team is ready for the challenge. I am not going to go easy on them. ",
            comments:34, likes:307,created_at:"2022-04-01T10:00:00.000Z",tags:["teamwork","ninjatraining", "belltraining"],
            media:[{type:"img",url:"assets/post-images/kakashi2.jpg"},
            ],
            user: {id:1, name:"Kakashi Hatake", status:true,imgUrl:"assets/profile/kakashi.jpg"}}
        ]
    }
}