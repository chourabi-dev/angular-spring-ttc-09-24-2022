import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required) 
    
  })


  successMessage:string = '';
  errorMessage:string = '';
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }


  saveData(){
    console.log(this.form.value);


    this.api.addNewEmployee(this.form.value).toPromise().then((res:any)=>{
      if (res.success === true) {
        // 

        this.successMessage = res.message;
      } else {
        this.errorMessage = res.message;
      }
    })
    
  }


}
