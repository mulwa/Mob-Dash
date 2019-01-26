import { Component, OnInit } from '@angular/core';
import { TicketingService } from '../../../services/ticketing.service';
import { Ticket } from '../../../models/ticketRes';

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.css']
})
export class SearchTicketComponent implements OnInit {
  tickets:Ticket[] = [];
  showLoading:boolean;
  noTicketFound:boolean;

  constructor(public ticketingService:TicketingService) { }

  ngOnInit() {
    this.ticketingService.getTicketInfor('2540707200314')
    console.log(this.ticketingService.getTravelDates())
  }
  searchTicket(searchKey){
    this.noTicketFound = false
    if(this.tickets.length > 0){
      this.tickets = []
    }
    this.showLoading = true;
    console.log('searching'+searchKey)
    this.ticketingService.getTicketInfor(searchKey).subscribe(data =>{
      this.showLoading = false;
      if(data.response_code == 0){
        this.tickets = data.tickets;
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

}
