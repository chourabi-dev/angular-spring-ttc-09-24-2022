import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from './access.guard';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { EmployeePageComponent } from './pages/about/employee-page/employee-page.component';
import { HistoricPageComponent } from './pages/about/historic-page/historic-page.component';
import { EmployeeDetailsPageComponent } from './pages/employee-details-page/employee-details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';


const routes: Routes = [
  /*{ path:'', component:HomePageComponent },*/
  { path:'', redirectTo:'home', pathMatch:'full'  },
  { path:'home', component:HomePageComponent }, 
  { path:'about', canActivate:[AccessGuard],   component:AboutPageComponent , 
    children:[
      { path:'historic', component:HistoricPageComponent },
      { path:'employees', component:EmployeePageComponent },
      
    ]   
  },  




  // services !!!!

  { path:'products', component:ProductsComponent },
  { path:'shopping-cart', component:ShoppingCartComponent },
  




  { path:'employees/details/:id' , component:EmployeeDetailsPageComponent },  
  { path:'**' , component:NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
