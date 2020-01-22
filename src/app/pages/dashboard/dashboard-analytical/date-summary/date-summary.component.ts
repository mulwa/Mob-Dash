import { Component, OnInit, Input } from "@angular/core";
import { Http } from "@angular/http";
import { IDate } from "../../../../models/DashboardModel/ticketReport";
@Component({
  selector: "app-date-summary",
  templateUrl: "./date-summary.component.html",
  styleUrls: ["./date-summary.component.css"]
})
export class DateSummaryComponent implements OnInit {
  @Input()
  public data: IDate[];
  public rowsOnPage = 10;
  public filterQuery = "";
  public sortBy: string;
  public sortOrder = "desc";
  totalReceived;
  totalTickets;

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
