import { FoutynineSeaterComponent } from './../../foutynine-seater/foutynine-seater.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { BookingComponent } from './booking.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ElevenSeaterComponent } from '../../eleven-seater/eleven-seater.component';


const bookingRoutes: Routes = [
  {
    path:'',
    component:BookingComponent,
    
  },  

]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(bookingRoutes)
  ],
  declarations: [    
    BookingComponent,
    ElevenSeaterComponent,
    FoutynineSeaterComponent   
  ],
  exports:[
      
  ]
})
export class BookingModule { }
