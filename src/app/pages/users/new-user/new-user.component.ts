import { Component, OnInit } from "@angular/core";
import { TicketingService } from "../../../services/ticketing.service";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  searchableselect;

  constructor(private ticketingService: TicketingService) {}

  ngOnInit() {
    this.getCity();
  }

  getCity() {
    this.ticketingService.getCitites().subscribe(
      data => {
        // this.cities = data.cities;
        // console.log(this.searchableselect)
        this.searchableselect = this.ticketingService.cloneOptions(data.cities);
        console.log(this.searchableselect);
      },
      error => {
        console.log(`An Error has Occured ${error.message}`);
      }
    );
  }
}
