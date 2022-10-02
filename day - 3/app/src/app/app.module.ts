import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './comps/news/news.component';
import { FeedComponent } from './comps/feed/feed.component';
import { LikeButtonComponent } from './comps/like-button/like-button.component';
import { ParentComponent } from './comps/parent/parent.component';
import { ChildComponent } from './comps/child/child.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HistoricPageComponent } from './pages/about/historic-page/historic-page.component';
import { EmployeePageComponent } from './pages/about/employee-page/employee-page.component';
import { EmployeeDetailsPageComponent } from './pages/employee-details-page/employee-details-page.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    FeedComponent,
    LikeButtonComponent,
    ParentComponent,
    ChildComponent,
    HomePageComponent,
    AboutPageComponent,
    NavbarComponent,
    NotFoundPageComponent,
    HistoricPageComponent,
    EmployeePageComponent,
    EmployeeDetailsPageComponent,
    ProductsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
