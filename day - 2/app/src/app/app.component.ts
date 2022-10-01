import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // EXMPL 1
 /* photoURL:string='https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg'

  index:number = 0; 
  gallery:string[] = [
    'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg',
    'https://wallpaperaccess.com/full/2918041.jpg',
    'https://i.pinimg.com/originals/70/fb/a0/70fba0dfb3cad645c2595d43451a0391.png'
  ]
 

  next(){
    console.log("clicked !!!"); 
    this.index++; 
    if ( this.index == this.gallery.length ) {
      this.index = 0;
    }
    this.photoURL = this.gallery[this.index];
    
  } 
  previous(){
    this.index--;

    if (this.index < 0) {
      this.index = this.gallery.length -1 ;
    }
    this.photoURL = this.gallery[this.index]; 
  }*/


  // EXMPl 2
  /*elements = [];
 
  typing(event){
    console.log( event );

    const val = event.target.value;
    const code = event.code;

    console.log(val); 

    if (code === 'Enter') { 
      this.elements.push(val);
      event.target.value='';
    } 
  }


  deleteElement(i:number){
    this.elements.splice(i,1);
  }

  clearAllElement(){
    this.elements = [];
  }*/

/*
  x:number = 0;
  y:number = 0;


  isMoving(event){
    console.log(event);
    const x = event.clientX;
    const y = event.clientY;
    

    this.x = (x - 30);
    this.y = (y - 30);
    
  }*/




}
