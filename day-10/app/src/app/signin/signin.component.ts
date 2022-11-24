import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    
  })
  constructor( private api:ApiService, private router:Router ) { }

  ngOnInit(): void {
  }



  submit(){
    this.api.authUser(this.form.value).toPromise().then((res:any)=>{
      console.log(res);

      if (res.accessToken) {
        
        localStorage.setItem("token-demo", res.tokenType+' '+res.accessToken);

        this.router.navigateByUrl('');

      }
      
    })
  }

}
