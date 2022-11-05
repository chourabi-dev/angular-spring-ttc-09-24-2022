import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculesRoutingModule } from './vehicules-routing.module';
import { VehiculesComponent } from './vehicules.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterventionsComponent } from './interventions/interventions.component';


@NgModule({
  declarations: [VehiculesComponent, ListComponent, AddComponent, InterventionsComponent],
  imports: [
    CommonModule,
    VehiculesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VehiculesModule { }
