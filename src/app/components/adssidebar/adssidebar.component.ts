import { Component, OnInit, Input } from '@angular/core';
import { AdsSponsored } from '../../model/ads/ads.model';

@Component({
  selector: 'app-adssidebar',
  templateUrl: './adssidebar.component.html',
  styleUrls: ['./adssidebar.component.scss']
})
export class AdssidebarComponent implements OnInit {

  @Input('data') adsData:AdsSponsored = {id:"ads-newjxds", 
                                        title:"Placeholder", 
                                        description:"ads-placeholder", 
                                        link:"http://new.shirt.com/url",
                                        imgUrl:"assets/ads/image2.jpg"};
  constructor() { }

  ngOnInit(): void {
  }

}
