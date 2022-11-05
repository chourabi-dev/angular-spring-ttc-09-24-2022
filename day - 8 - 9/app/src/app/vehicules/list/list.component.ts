import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  vehicules:any[] = [];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getAllVehicules().toPromise().then((res:any[])=>{
      this.vehicules = res;
    })
  }

}
