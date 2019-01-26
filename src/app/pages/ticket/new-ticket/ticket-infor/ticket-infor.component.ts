import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketingService } from '../../../../services/ticketing.service';
import { Ticket } from '../../../../models/ticketRes';

@Component({
  selector: 'app-ticket-infor',
  templateUrl: './ticket-infor.component.html',
  styleUrls: ['./ticket-infor.component.css']
})
export class TicketInforComponent implements OnInit {
  reference_no: any;
  mytickets:Ticket[];

  constructor(private ticketService:TicketingService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.reference_no = params['ref_no']
      this.getTicketInfro(this.reference_no)
    })
  
  }
  getTicketInfro(refNo:any){
    this.ticketService.getTicketInfor(refNo).subscribe(data =>{
      this.mytickets = data.tickets  
      

    })
  } 

}
