import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  clients:any[] = [];
  clientsSearchArray:any[]=[];

  isSearching = false;


  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData(){
    this.api.getClientsList().toPromise().then((res:any[])=>{
      console.log(res);

      this.clients = res;
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }


  searchByCIN(event){
    const val = event.target.value;
   

    if (val != '') {
      this.isSearching = true; 
  
      this.clientsSearchArray = this.clients.filter( 
        (client)=>
        ( client.cin.indexOf(val) != -1) 
        ||
        ( client.email.indexOf(val) != -1) 
        ||
        ( client.fullname.indexOf(val) != -1) 
        
        
        );
      
    } else {
      this.isSearching = false;


    }
  }




  deleteClient(id){ 

    this.api.deleteClientByID(id).toPromise().then(()=>{
      
      this.initData();

    })
  }





}
