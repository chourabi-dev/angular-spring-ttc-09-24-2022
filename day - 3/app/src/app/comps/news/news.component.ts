import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news:any[] = [
    { id:1 , nbrLikes:2, didLike:false, name:"chourabi taher", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel odio animi, fugiat placeat, maiores modi error soluta quis doloribus rerum alias possimus nulla, nemo quisquam laboriosam corporis nobis delectus dolor." },
    { id:2 , nbrLikes:10, didLike:true, name:"test user", content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel odio animi, fugiat placeat, maiores modi error soluta quis doloribus rerum alias possimus nulla, nemo quisquam laboriosam corporis nobis delectus dolor." },
    { id:2 , nbrLikes:19, didLike:false, name:"test user 3", content:"test content" },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
