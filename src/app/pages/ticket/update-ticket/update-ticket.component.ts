import { TicketingService } from './../../../services/ticketing.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticketRes';


@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {
  showLoading:boolean;
  tickets:Ticket[] = [];  
  noTicketFound:boolean;
  updatingTicket:boolean=false;
  ticket_status;
  current_ticket;
  paymentId:string;

  constructor(public ticketingService:TicketingService) { }

  ngOnInit() {
   
  }

  searchTicket(searchKey){
    console.log('searching ticket '+searchKey)
    this.noTicketFound = false
    if(this.tickets.length > 0){
      this.tickets = []
    }
    this.showLoading = true;

    this.ticketingService.getTicketInfor(searchKey).subscribe(data =>{
      this.showLoading = false;
      if(data.response_code == 0){
        this.tickets = data.tickets;
        this.current_ticket = this.tickets[0];
        this.ticket_status = this.tickets[0].status;
        if(this.tickets.length < 0){
          this.noTicketFound = true
        }
      }else{
        console.log('no ticket found please try later')
        this.noTicketFound = true
      }
    },error =>{
      this.showLoading=false
      console.log('An Error has Occured'+error)
    })

  }

  onCancelTicket(){
    this.updateTicket(this.tickets,"","cancelled")   
    

  }
  onConfirmTicket(){ 
    let payment_Id;  
    if(this.paymentId !=undefined){
      console.log('confirming with payment Id'+this.paymentId)
      payment_Id = this.paymentId;

    }else{
      payment_Id = ""
    }  
    this.updateTicket(this.tickets,payment_Id,"confirmed") 
        
  }

  updateTicket = async (ticketArray:Ticket[],paymentId:string, status:string)=>{
    this.updatingTicket = true;
     var noOfTickets = ticketArray.length;
     let loop_counter = 0; 
     console.log('total number'+noOfTickets)   
    for(let ticket of ticketArray){
      loop_counter +=1;
      let result = await this.ticketingService.onTicketUpdate(ticket.reference_number,ticket.bus_company_ref_number,paymentId,status)
    console.log(`updating ticket ${result.response_message} ticket ${loop_counter} of ${noOfTickets}`)
    if(loop_counter == noOfTickets){
      this.updatingTicket = false;
      this.paymentId =""
      console.log(`Done updateting all tickets ${result}`)
      this.searchTicket(ticket.reference_number)
    }
    }
  }

}
