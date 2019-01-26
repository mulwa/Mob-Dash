import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPaymentComponent } from './search-payment.component';
import { Routes, RouterModule} from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { SharedModule } from '../../shared/shared.module';

const searchPayRoutes:Routes = [
  {path:'',component:SearchPaymentComponent}
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(searchPayRoutes)
  ],
  declarations: [SearchPaymentComponent, PaymentDetailsComponent]
})
export class SearchPaymentModule { }
