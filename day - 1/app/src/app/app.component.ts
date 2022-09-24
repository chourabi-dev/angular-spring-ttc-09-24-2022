import { Component } from '@angular/core';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  email:string="tchourabi@gmail.com";

  username  = "chourabi"

  year = 2022;

  employees:Employee[] = [ 
    { fullname:"chourabi taher", email:"tchourabi@gmail.com",phone:93863732, year:2005 },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com",phone:93863732, year:2006 },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com",phone:93863732, year:2020 },
    { fullname:"chourabi taher", email:"tchourabi@gmail.com",phone:93863732, year:2022 },
    
    
    
   ];


  user:any = { name:"chourabi taher" , email:"tchourabi@gmail.com" };


  today = new Date();

  somme( x:number,y:number ){
    return( x+y );
  }


  showBloc:boolean = true;






}
