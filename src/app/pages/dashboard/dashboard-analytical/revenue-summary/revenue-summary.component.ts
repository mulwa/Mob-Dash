import { Vehicle } from "./../../../../models/DashboardModel/ticketReport";
import { Component, OnInit, Input } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-revenue-summary",
  templateUrl: "./revenue-summary.component.html",
  styleUrls: ["./revenue-summary.component.css"]
})
export class RevenueSummaryComponent implements OnInit {
  @Input()
  public data: Vehicle[];
  public rowsOnPage = 10;
  public filterQuery = "";
  public sortBy: string;
  public sortOrder = "desc";
  totalTickets: number;
  totalReceived: number;

  constructor(public http: Http) {}

  ngOnInit() {}
  ngOnChanges() {
    if (this.data) {
      this.add();
    }
  }

  add() {
    this.totalReceived = this.data.map(x => x.received).reduce((a, b) => a + b);
    this.totalTickets = this.data.map(x => x.tickets).reduce((a, b) => a + b);
  }
}
