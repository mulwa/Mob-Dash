import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { TicketInforComponent } from './ticket-infor.component';
import { TicketDetailsComponent } from '../../ticket-details/ticket-details.component';
import { TicketModuleModule } from '../../ticket-module/ticket-module.module';

const ticket_route:Routes = [
  {path:'', component:TicketInforComponent}
]


@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forChild(ticket_route)
  ],
  declarations: [
    TicketInforComponent,
    TicketModuleModule
  ],
  exports:[
    TicketInforComponent,
    
  ]
})
export class TickeInfoModule { }
