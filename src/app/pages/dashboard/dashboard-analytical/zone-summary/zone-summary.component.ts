import { Component, OnInit, Input } from "@angular/core";
import { Http } from "@angular/http";
import { Office } from "../../../../models/DashboardModel/ticketReport";

@Component({
  selector: "app-zone-summary",
  templateUrl: "./zone-summary.component.html",
  styleUrls: ["./zone-summary.component.css"]
})
export class ZoneSummaryComponent implements OnInit {
  @Input()
  public data: Office[];
  public rowsOnPage = 10;
  public filterQuery = "";
  public sortBy: string;
  public sortOrder = "desc";
  totalReceived: number;
  totalTickets: number;

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
