import { Component, OnInit, Input } from '@angular/core';
import {Http} from '@angular/http';
import { Agent } from '../../../../models/DashboardModel/ticketReport';


@Component({
  selector: 'app-agent-summary',
  templateUrl: './agent-summary.component.html',
  styleUrls: ['./agent-summary.component.css']
})
export class AgentSummaryComponent implements OnInit {
  @Input()
  // agentInfor:Agent[];
  public data: Agent[];
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy: string;
  public sortOrder = 'desc';

  constructor(public http: Http) { }

  ngOnInit() {
    

  }

}
