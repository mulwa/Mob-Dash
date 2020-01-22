import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewVehicleComponent } from "./NewVehicleComponent";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../../shared/shared.module";

const addVehicleRoute: Routes = [
  {
    path: "",
    component: NewVehicleComponent
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(addVehicleRoute)],

  declarations: [NewVehicleComponent]
})
export class VehicleModule {}
