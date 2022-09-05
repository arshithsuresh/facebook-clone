export class User{
    constructor(
        public id:number =-1,public name:string="Unknown",
        public status:boolean=false, public imgUrl?:string) { 

    }

    static getMockContacts():User[]{
        return [
            {id:123, name:"Naruto Uzamaki", status:true, imgUrl:"assets/profile/naruto.png"},
            {id:122, name:"Sauske Uchiha", status:true, imgUrl:"assets/profile/sauske.jpg"},
            {id:121, name:"Sakura Haruno", status:true, imgUrl:"assets/profile/sakura.jpg"},
            {id:124, name:"Kakashi Hatake", status:true, imgUrl:"assets/profile/kakashi.jpg"},
            {id:125, name:"Goku Kakarot", status:true, imgUrl:"assets/profile/goku.jpg"},
            {id:126, name:"Vegeta", status:true, imgUrl:"assets/profile/vegeta.jfif"},
        ]
    }
}