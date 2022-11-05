import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private server:string ='http://localhost:8080';

  constructor(private http:HttpClient) { }

  getClientsList(){
    return this.http.get(this.server+'/api/clients/list')
  }

  
  findClientByID(id){
    return this.http.get(this.server+'/api/clients/find/'+id)
  }

  deleteClientByID(id){
    return this.http.delete(this.server+'/api/clients/delete/'+id)
  }


  addNewClient(body){
    return this.http.post(this.server+'/api/clients/add',body)
  }


  updateClient(body,id){
    return this.http.put(this.server+'/api/clients/update/'+id,body)
  }

  /************************************************************************ */

  addNewVehicule(body){
    return this.http.post(this.server+'/api/vehicules/add',body)
  }

  getAllVehicules(){
    return this.http.get(this.server+'/api/vehicules/list')
  }


  /**************************************** */

  

  addNewEmployee(body){
    return this.http.post(this.server+'/api/employees/add',body)
  }

  getAllEmployee(){
    return this.http.get(this.server+'/api/employees/list')
  }

}
