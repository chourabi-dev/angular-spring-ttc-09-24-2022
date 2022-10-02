import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products:any[] = [
    { id: 1 , name:"HP Pavillion" },
    { id: 2 , name:"Sony headphone" },
    { id: 3 , name:"HP printer" },
    
  ]
  constructor(private panierService:PanierService) { }

  ngOnInit(): void {
  }



  addToCart(produit){
    console.log(produit);
    
    this.panierService.addProductToShoppingCart(produit);
  }
}
