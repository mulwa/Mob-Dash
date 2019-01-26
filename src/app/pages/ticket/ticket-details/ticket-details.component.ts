import { Ticket } from './../../../models/ticketRes';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  @Input()
  tickets:Ticket[];

  constructor() { }

  ngOnInit() {
  }

}
