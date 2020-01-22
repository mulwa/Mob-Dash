import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManageoperatorComponent } from "./manageoperator.component";
import { Routes, RouterModule } from "@angular/router";
const route: Routes = [
  {
    path: "",
    component: ManageoperatorComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(route)],
  declarations: [ManageoperatorComponent]
})
export class ManageoperatorModule {}
