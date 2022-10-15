import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  form = new FormGroup({ 
    name: new FormControl('' , Validators.required  ),
    email: new FormControl('',  [  Validators.required , Validators.email  ] ),


    address : new FormGroup({
      city: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      
    }),


    username: new FormControl('',  [ Validators.required, Validators.minLength(10) ] ),
    password: new FormControl('',  [ Validators.required , Validators.pattern('[0-9]{6}') ] ),
    
  })


  constructor() { }

  ngOnInit(): void {
    console.log(this.form);

    
  }



  addEmployee(){
    const body = this.form.value;

    console.log(body);
    
  }
}
