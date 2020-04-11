import { Component, OnInit } from "@angular/core";
import { VehiclesService } from "../../../services/vehicles.service";

@Component({
  selector: "app-new-vehicle",
  templateUrl: "./new-vehicle.component.html",
  styleUrls: ["./new-vehicle.component.css"]
})
export class NewVehicleComponent implements OnInit {
  constructor() {
    console.log("settlement called");
  }

  ngOnInit() {
    console.log("settlement onInit called");
  }
}
