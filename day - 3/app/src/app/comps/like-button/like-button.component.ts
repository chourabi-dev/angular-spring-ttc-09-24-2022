import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

  @Input() nbrLikes:number;
  @Input() didLike:boolean;

  constructor() { }

  ngOnInit(): void {
  }


  updateLike(){
    
    if (this.didLike == true) {
      this.nbrLikes--;
    }else{
      this.nbrLikes++;
    }

    this.didLike = ! this.didLike;

  }
}
