import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OperatorComponent } from "./operator.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { OperatorService } from "../../services/operator.service";

const route: Routes = [
  {
    path: "",
    component: OperatorComponent
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(route)],
  declarations: [OperatorComponent],
  providers: [OperatorService]
})
export class OperatorModule {}
