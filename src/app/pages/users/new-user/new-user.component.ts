import { Component, OnInit } from "@angular/core";
import { TicketingService } from "../../../services/ticketing.service";
import { OperatorService } from "../../../services/operator.service";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  searchableselect;
  searchableOperator;

  constructor(
    private ticketingService: TicketingService,
    private operatorService: OperatorService
  ) {}

  ngOnInit() {
    this.getAllOperators();
  }

  getAllOperators() {
    this.operatorService.getAllOperators().subscribe(res => {
      this.searchableOperator = this.operatorService.cloneAllOperatorOptions(
        res.psv_operators
      );
    });
  }
}
