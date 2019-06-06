import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateTicketComponent } from './update-ticket.component';
import {Routes, RouterModule} from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

const UpdateRoute:Routes = [
  {path:'', component:UpdateTicketComponent}
]


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(UpdateRoute)
  ],
  declarations: [UpdateTicketComponent]
})
export class UpdateTicketModule { }
