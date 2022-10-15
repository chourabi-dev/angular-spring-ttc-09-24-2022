import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  /**
   * 
   * const camera = !!!!! TIMING !!!!!!  Mypc.getCamera();
   * 
   * log camera => null
   * 
   * const photo = camera.takePhoto(); // URI 
   * 
   * log(photo) => null 
   * server.savePhoto(photo)
   * 
   */
  constructor() { }

  ngOnInit(): void {
  }


  initCamera(){
    let camera = new Promise( (  success,error  )=>{

      // ... 

     setTimeout(()=>{
     
        success( { camera: true } )


     //  error( { message:'Oups, camera not found' } );

     },4000)

      
      
    } );


    return camera;
  }



  async takePhoto(){

    // const camera = this.initCamera(); // NEVER DO THIS !!!!!!!

  /* this.initCamera().then( (res)=>{
    console.log(res);


    // res.camera.takePhotoFromCamera()
    
   } ).catch( ( error )=>{
    console.log(error);
    
   } )*/



   const camera = await this.initCamera();


   console.log(camera);
   
    
  }







  /**************************************************************** */


  trackUser(){
    let tracking = new Observable( ( observer )=>{

      navigator.geolocation.watchPosition( (postion)=>{
        observer.next(postion);
      }, (error)=>{
        observer.error(error);
      } )

    } )


    return tracking;
  }



  trackMyLocation(){
     this.trackUser().subscribe( (data)=>{
      console.log(data);
      
     } , ( error )=>{
      console.log(error);
      
     } )
  }





}
