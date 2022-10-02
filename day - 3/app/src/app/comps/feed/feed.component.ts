import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() name:string;
  @Input() content:string;
  @Input() nbrLikes:number;
  @Input() didLike:boolean;
 


  constructor() { }

  ngOnInit(): void {
  }

}
