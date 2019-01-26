import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { NewTicketComponent } from './new-ticket.component';
import { VehicleListComponent } from '../vehicle-list/vehicle-list.component';
import { SharedModule } from '../../../shared/shared.module';



const ticketRoutes: Routes = [
  {
    path:'',
    component:NewTicketComponent,    
  },  

]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ticketRoutes)
  ],
  declarations: [
    NewTicketComponent,
    VehicleListComponent,
    
        
  ],
  exports:[
    NewTicketComponent, 
    VehicleListComponent   
  ]
})
export class NewTicketModule { }
