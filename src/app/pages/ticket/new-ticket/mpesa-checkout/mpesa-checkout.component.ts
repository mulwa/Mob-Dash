import { TicketingService } from './../../../../services/ticketing.service';

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-mpesa-checkout',
  templateUrl: './mpesa-checkout.component.html',
  styleUrls: ['./mpesa-checkout.component.css']
})
export class MpesaCheckoutComponent implements OnInit {
  public mpesaFrm:FormGroup;
  @Input()
  mpesaReference:string;
  showLoading:boolean = false; 

  constructor(public frmBuilder:FormBuilder, public ticketService:TicketingService) { }

  ngOnInit() {
    this.initializeForm()
  }
  initializeForm(){
    this.mpesaFrm = this.frmBuilder.group({
      mpesa_phone_number:['', Validators.required]
    })
  }
processMpesa(){
  this.showLoading = true;
  console.log(`${this.mpesaFrm.get('mpesa_phone_number').value},  ${this.mpesaReference}`)
  this.ticketService.mpesaPayment(this.mpesaReference,this.mpesaFrm.get('mpesa_phone_number').value).subscribe(res =>{    
    this.showLoading = false;
    if(res.response_code == 0){
      console.log(`SucessFull ${res.response_message}`)
      this.mpesaFrm.reset()
    }else{
      console.log(`Failed To Authorize Mpesa ${res.response_message}`)
    }
  },error =>{
    this.showLoading = false;
    console.log('an Error Has Occured'+error)
  })

}

}
