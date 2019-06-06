import { Ticket } from './../../../../models/ticketRes';
import { Component, OnInit, Input } from '@angular/core';
import { Http} from '@angular/http';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {
  @Input()  
  public data: Ticket[];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy: string;
  public sortOrder = 'desc';

  constructor(public http:Http) { }

  ngOnInit() {
    
  }

}
