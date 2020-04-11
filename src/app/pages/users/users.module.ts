import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewUserComponent } from "./new-user/new-user.component";
import { ManageUserComponent } from "./manage-user/manage-user.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { OperatorService } from "../../services/operator.service";

const userRoute: Routes = [
  {
    path: "",
    component: NewUserComponent
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(userRoute)],

  declarations: [NewUserComponent],
  providers: [OperatorService]
})
export class UsersModule {}
