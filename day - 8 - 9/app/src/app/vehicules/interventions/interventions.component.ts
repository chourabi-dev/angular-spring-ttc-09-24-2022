import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.css']
})
export class InterventionsComponent implements OnInit {

  id;


  form = new FormGroup({
 

    category: new FormControl('',Validators.required),
    employee: new FormControl('',Validators.required),
    descreption: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required)



  })

  successMessage:string="";
  errorMessage:string="";


  categories:any[] = [];
  employees:any[] = [];


  interventions:any[] = [];

  total = 0;


  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;


    this.api.getInterventionByVehiculeID(this.id).toPromise().then((interventions:any[])=>{
      console.log(interventions);
      
    })


    this.api.getCategories().toPromise().then((res:any[])=>{ this.categories = res; })

    this.api.getEmployees().toPromise().then((res:any[])=>{ this.employees = res; })

    this.api.getInterventionByVehiculeID(this.id).toPromise().then((res:any[])=>{ 
      this.interventions = res; 
      console.log(this.interventions);


      this.interventions.map(  (intervention)=>{   this.total+= intervention.price  }  )



     })
  }


  saveData(){

    let body = this.form.value;
 
    body.vehicule = this.id; 
    this.api.addIntervention(body).toPromise().then((res:any)=>{
      if (res.success === true) {
        //  
        this.successMessage = res.message;

        this.form.reset();


      } else {
        this.errorMessage = res.message;
      }
    })

    

  }
}
