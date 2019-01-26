import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTicketComponent } from './update-ticket.component';
import {Routes, RouterModule} from '@angular/router';

const UpdateRoute:Routes = [
  {path:'', component:UpdateTicketComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UpdateRoute)
  ],
  declarations: [UpdateTicketComponent]
})
export class UpdateTicketModule { }
