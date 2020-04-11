import { Component, OnInit } from "@angular/core";
import { VehiclesService } from "../../../services/vehicles.service";
import { OperatorService } from "../../../services/operator.service";
@Component({
  selector: "app-new-vehicle",
  templateUrl: "./new-vehicle.component.html",
  styleUrls: ["./new-vehicle.component.css"]
})
export class NewVehicleComponent implements OnInit {
  settlementOption;
  vehicleStatus;
  vehicleType;
  transacrionChargeType;
  transactionChargeband;
  searchableOperator;
  constructor(
    private vehicleService: VehiclesService,
    private operatorService: OperatorService
  ) {}
  ngOnInit() {
    this.getVehicleStatus();
    this.getVehicleChargeBand();
    this.getSettlementChannel();
    this.getVehicleTransactionType();
    this.getVehicleType();
    this.getAllOperators();
  }

  getSettlementChannel() {
    console.log("Settlement channel called");
    this.vehicleService.getSettlementChannel().subscribe(res => {
      this.settlementOption = this.vehicleService.cloneSettlementOptions(
        res.result
      );
      console.log(this.settlementOption);
    });
  }
  getVehicleStatus() {
    this.vehicleService.getVehicleStatus().subscribe(res => {
      this.vehicleStatus = res.vehiclestatus;
      console.log(this.vehicleStatus);
    });
  }
  getVehicleChargeBand() {
    this.vehicleService.getVehicleChargeBand().subscribe(res => {
      this.transactionChargeband = res.transactionchargeband;
      console.log(this.transactionChargeband);
    });
  }
  getVehicleTransactionType() {
    this.vehicleService.getVehicleTransactionType().subscribe(res => {
      this.transacrionChargeType = res.transactionchargetype;
      console.log(this.transacrionChargeType);
    });
  }
  getVehicleType() {
    this.vehicleService.getVehicleType().subscribe(res => {
      this.vehicleType = res.registrationtype;
    });
  }
  getAllOperators() {
    this.operatorService.getAllOperators().subscribe(res => {
      this.searchableOperator = this.operatorService.cloneAllOperatorOptions(
        res.psv_operators
      );
    });
  }
}
