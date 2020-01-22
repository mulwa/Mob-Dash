import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-manageoperator",
  templateUrl: "./manageoperator.component.html",
  styleUrls: ["./manageoperator.component.css"]
})
export class ManageoperatorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  searchCompany(company) {
    console.log(company);
  }
}
