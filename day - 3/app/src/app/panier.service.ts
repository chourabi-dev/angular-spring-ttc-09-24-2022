import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier:any[]  = [];

  constructor() { }




  addProductToShoppingCart(p){
    this.panier.push(p);
  }


}
