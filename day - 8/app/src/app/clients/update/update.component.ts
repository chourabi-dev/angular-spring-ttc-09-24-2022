import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form = new FormGroup({
    fullname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    cin: new FormControl('',Validators.required),
    
  })


  successMessage:string = '';
  errorMessage:string = '';
  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;


    this.api.findClientByID(id).toPromise().then((client:any)=>{
      console.log(client);


      this.form.setValue({
        fullname:  client.fullname,
        email: client.email,
        address:  client.address,
        cin: client.cin
      })
      
    })
  }


  saveData(){
    
    const id = this.route.snapshot.params.id;

    this.api.updateClient(this.form.value,id).toPromise().then((res:any)=>{
      if (res.success === true) {
        // 

        this.successMessage = res.message;
      } else {
        this.errorMessage = res.message;
      }
    })
    
  }

}
