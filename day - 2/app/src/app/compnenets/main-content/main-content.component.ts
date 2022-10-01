import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  today = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }


  getTodaysDate(){
    let date = '';

    const today  = new Date();

    date = today.getFullYear() + ' / '+( today.getMonth()+ 1) + ' / '+ today.getDate()
  
    return date;
  }

}
