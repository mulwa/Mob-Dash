import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManageUserComponent } from "../manage-user/manage-user.component";
import { Routes, RouterModule } from "@angular/router";

const userRoute: Routes = [
  {
    path: "",
    component: ManageUserComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoute)],

  declarations: [ManageUserComponent]
})
export class ManageUserModule {}
