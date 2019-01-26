import { ActivatedRoute } from '@angular/router';
import { TicketingService } from './../../../../services/ticketing.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../../models/ticketRes';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  reference_no: any;
  mytickets: Ticket[];
  showCash: boolean = true;
  showJamboPay: boolean = false;
  showMpesa: boolean = false;
  selected_seat: number;
  ticketCost: number;

  constructor(private ticketService: TicketingService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.reference_no = params['ref_no']
      this.getTicketInfro(this.reference_no)
    })
  }

  showMpesaWidget() {
    if (this.showMpesa) {
      this.showMpesa = false;
      this.showCash = false;
    } else {
      this.showMpesa = true;
      this.showJamboPay = false;
      this.showCash = false;
    }

  }
  showCashWidget() {
    if (this.showCash) {
      this.showCash = false;
    } else {
      this.showCash = true;
      this.showJamboPay = false;
      this.showMpesa = false;
    }
  }
  showJamboPayWidget() {
    if (this.showJamboPay) {
      this.showJamboPay = false
    } else {
      this.showJamboPay = true;
      this.showMpesa = false;
      this.showCash = false;
    }

  }
  getTicketInfro(refNo: any) {
    this.ticketService.getTicketInfor(refNo).subscribe(data => {
      this.mytickets = data.tickets
      console.log(data)
      this.ticketCost = parseInt(data.tickets[0].amount) * data.tickets.length
      console.log(`total cost ${this.ticketCost}`)
    })
  }

}
