import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/panier.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  list:any[] = [];

  constructor(private panierService:PanierService) { }

  ngOnInit(): void {

    // what do we have in the shopping cart service !!!

    console.log();

    this.list = this.panierService.panier;
    
  }

}
