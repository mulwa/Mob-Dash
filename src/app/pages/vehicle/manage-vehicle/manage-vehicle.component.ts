import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-manage-vehicle",
  templateUrl: "./manage-vehicle.component.html",
  styleUrls: ["./manage-vehicle.component.css"]
})
export class ManageVehicleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("ngOnit called manage");
  }

  searchVehicle(vehicle) {
    console.log(vehicle);
  }
}