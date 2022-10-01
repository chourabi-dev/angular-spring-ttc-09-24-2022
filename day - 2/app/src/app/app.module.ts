import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compnenets/navbar/navbar.component';
import { FooterComponent } from './compnenets/footer/footer.component';
import { SideMenuComponent } from './compnenets/side-menu/side-menu.component';
import { MainContentComponent } from './compnenets/main-content/main-content.component';
import { MydatePipe } from './mydate.pipe';
import { EmailPipe } from './email.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SideMenuComponent,
    MainContentComponent,
    MydatePipe,
    EmailPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
