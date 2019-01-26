import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { PaymentComponent } from './payment.component';
import { WalletCheckoutComponent } from '../wallet-checkout/wallet-checkout.component';
import { MpesaCheckoutComponent } from '../mpesa-checkout/mpesa-checkout.component';
import { CashCheckoutComponent } from '../cash-checkout/cash-checkout.component';


const ticketPaymentRoutes: Routes = [
  {
    path:'',
    component:PaymentComponent,
    
  },  

]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ticketPaymentRoutes)
  ],
  declarations: [    
    PaymentComponent,
    MpesaCheckoutComponent,
    WalletCheckoutComponent,
    CashCheckoutComponent   
  ],
  exports:[
      
  ] 
})
export class TicketPaymentModule { }
