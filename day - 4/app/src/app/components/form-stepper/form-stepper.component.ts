import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.css']
})
export class FormStepperComponent implements OnInit {


  index:number= 0;


  stepper = new FormGroup({
    stepOne: new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      
    }),
    stepTwo: new FormGroup({
      city: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
    }), 
  })

  constructor() { }

  ngOnInit(): void {
    console.log(this.stepper);

    // rest the form !!!

    // this.from.reset();
    
  }



  next(){
    this.index++;
  }

  previous(){
    this.index--;
  }


  validateForm(){

  }
}
