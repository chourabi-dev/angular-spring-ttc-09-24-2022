import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css']
})
export class HttpCallComponent implements OnInit {

  isLoading:boolean = false;



  users:any[] = [];


  constructor( private api:ApiService ) { }

  ngOnInit(): void {
    this.getDataFromServer();
  }



  getDataFromServer(){

    this.isLoading = true

    this.api.getUsersList().toPromise().then( (users:any[])=>{
      console.log(users);
       


      this.users = users;

    } ).catch( 
      (error)=>{
       
      }
    ).finally(()=>{
      this.isLoading = false;
    })

  }

}
