import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManageVehicleComponent } from "./manage-vehicle.component";
import { Routes, RouterModule } from "@angular/router";

const manageVehicleRoute: Routes = [
  {
    path: "",
    component: ManageVehicleComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(manageVehicleRoute)],
  declarations: [ManageVehicleComponent]
})
export class ManageVehicleModule {}
