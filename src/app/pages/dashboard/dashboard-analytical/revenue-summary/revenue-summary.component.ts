import { Vehicle } from './../../../../models/DashboardModel/ticketReport';
import { Component, OnInit, Input } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-revenue-summary',
  templateUrl: './revenue-summary.component.html',
  styleUrls: ['./revenue-summary.component.css']
})
export class RevenueSummaryComponent implements OnInit {
  @Input()
  public data: Vehicle[];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy: string;
  public sortOrder = 'desc';

  constructor(public http:Http) { }

  ngOnInit() {
    
  }

}
