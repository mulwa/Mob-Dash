import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from '@angular/router';
import { SearchTicketComponent } from './search-ticket.component';
import { TicketDetailsComponent } from '../ticket-details/ticket-details.component';
import { SharedModule } from '../../../shared/shared.module';

const ticketRoutes: Routes = [
  
  {
    path: '',
    component:SearchTicketComponent
  }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ticketRoutes),
    SharedModule
  ],
  declarations: [   
    SearchTicketComponent,
    TicketDetailsComponent
  ],
  exports:[    
    SearchTicketComponent,
    TicketDetailsComponent
  ]
})
export class SearchTicketModule { 

}
