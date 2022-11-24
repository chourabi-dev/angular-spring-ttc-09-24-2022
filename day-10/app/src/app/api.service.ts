import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  createAccount(body){
    return  this.http.post("http://localhost:8080/api/auth/signup",body)
  }


  authUser(body){
    return this.http.post("http://localhost:8080/api/auth/signin",body)
  }


}
