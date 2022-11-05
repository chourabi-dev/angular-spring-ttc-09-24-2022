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
    
    mark: new FormControl('',Validators.required),
    model: new FormControl('',Validators.required),
    vin: new FormControl('',Validators.required),
    matricul: new FormControl('',Validators.required),
    client: new FormControl('',Validators.required),
    

    
    
  })

  clients:any[] = [];


  successMessage:string = '';
  errorMessage:string = '';
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getClientsList().toPromise().then((clients:any[])=>{ this.clients = clients })
  }


  saveData(){
    console.log(this.form.value);


    this.api.addNewVehicule(this.form.value).toPromise().then((res:any)=>{
      if (res.success === true) {
        // 

        this.successMessage = res.message;
      } else {
        this.errorMessage = res.message;
      }
    })
    
  }

}
