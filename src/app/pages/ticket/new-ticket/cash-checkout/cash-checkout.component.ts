import { AuthenticationService } from './../../../../services/authentication.service';
import { TicketingService } from '../../../../services/ticketing.service';

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket } from '../../../../models/ticketRes';


@Component({
  selector: 'app-cash-checkout',
  templateUrl: './cash-checkout.component.html',
  styleUrls: ['./cash-checkout.component.css']
})
export class CashCheckoutComponent implements OnInit {
  public cashFrm:FormGroup;
  reference_no:any;
  mytickets:Ticket[];
  @Input()
  mpesaReference:string;
  showLoading:boolean= false; 

  constructor(public frmBuilder:FormBuilder, public ticketService:TicketingService,
     private router:Router, private activatedRoute:ActivatedRoute, private AuthService:AuthenticationService) { }

  ngOnInit() {
    this.initializeForm()
    this.activatedRoute.params.subscribe(params =>{
      this.reference_no = params['ref_no']
      this.getTicketInfro(this.reference_no)
    })
  }
  initializeForm(){
    this.cashFrm = this.frmBuilder.group({
      username:[this.AuthService.getUsername(), Validators.required],
      password:['', Validators.required]
    })
  }
processCash(){
  this.showLoading = true;
  console.log(`${this.cashFrm.get('username').value},  ${this.mpesaReference}`)
  this.ticketService.mpesaPayment(this.mpesaReference,this.cashFrm.get('username').value).subscribe(res =>{
    this.showLoading = false;
    if(res.response_code == 0){
      console.log(`SucessFull ${res.response_message}`)
      this.cashFrm.reset()
      this.navigateToPrint(this.mpesaReference)
    }else{
      console.log(`Failed To Authorize Mpesa ${res.response_message}`)
    }
  })

}

navigateToPrint(refNo:any){
  this.router.navigate(['/ticket/ticket-infor',{ ref_no: refNo }])

}
getTicketInfro(refNo:any){
  this.ticketService.getTicketInfor(refNo).subscribe(data =>{
    this.mytickets = data.tickets
  })
}

}
