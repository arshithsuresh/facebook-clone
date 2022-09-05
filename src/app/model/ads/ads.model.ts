export class AdsSponsored{

    constructor(public id:string, public title:string, public description:string,
        public link:string, public imgUrl:string)
        {

        }
    
    static getMockAd():AdsSponsored{
        return {id:"ads-newjxds", 
        title:"Men Shirts", 
        description:"ads-newjq", 
        link:"http://new.shirt.com/url",
        imgUrl:"assets/ads/image1.jpg"};        
    }
}