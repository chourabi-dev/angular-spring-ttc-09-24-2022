import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculesRoutingModule } from './vehicules-routing.module';
import { VehiculesComponent } from './vehicules.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [VehiculesComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    VehiculesRoutingModule
  ]
})
export class VehiculesModule { }
