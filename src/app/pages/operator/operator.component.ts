import { Component, OnInit } from "@angular/core";
import { OperatorService } from "../../services/operator.service";
import { OrganizationType } from "../../models/organizationTypeRes";
import { status } from "../../models/vehicleStatus";

@Component({
  selector: "app-operator",
  templateUrl: "./operator.component.html",
  styleUrls: ["./operator.component.css"]
})
export class OperatorComponent implements OnInit {
  organizationTypes: OrganizationType[];
  operatorStatus: status[];
  searchableselect;
  organizationStatusselect;

  constructor(private operatorService: OperatorService) {}

  ngOnInit() {
    this.getOperatorType();
    this.getOperatorStatus();
  }

  getOperatorType() {
    this.operatorService.getOperatorTypes().subscribe(operator => {
      this.organizationTypes = operator.organizationtypes;
      console.log(this.organizationTypes);
      this.searchableselect = this.operatorService.cloneOrganizationOptions(
        operator.organizationtypes
      );
    });
  }
  getOperatorStatus() {
    this.operatorService.getOperatorStatus().subscribe(res => {
      this.organizationStatusselect = this.operatorService.cloneOrganizationStatusOptions(
        res.operatorstatus
      );
    });
  }
}
