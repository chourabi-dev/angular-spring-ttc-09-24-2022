import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { ListComponent } from './list/list.component';

import { VehiculesComponent } from './vehicules.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'interventions/:id', component: InterventionsComponent },
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculesRoutingModule { }
