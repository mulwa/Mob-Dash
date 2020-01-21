import { AuthGuardService as authGuard } from "./guards/auth-guard.service";
import { Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layout/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layout/auth/auth-layout.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: "",
        redirectTo: "dashboard/analytical",
        pathMatch: "full"
      },
      {
        path: "dashboard/analytical",
        loadChildren:
          "./pages/dashboard/dashboard-analytical/dashboard-analytical.module#DashboardAnalyticalModule"
      },
      {
        path: "ticket/new-ticket",
        loadChildren: "./pages/ticket/new-ticket/ticket.module#NewTicketModule"
      },
      {
        path: "ticket/booking",
        loadChildren:
          "./pages/ticket/new-ticket/booking/booking.module#BookingModule"
      },
      {
        path: "ticket/ticket-infor",
        loadChildren:
          "./pages/ticket/new-ticket/ticket-infor/ticket-infor.module#TickeInfoModule"
      },
      {
        path: "ticket/payment",
        loadChildren:
          "./pages/ticket/new-ticket/payment/ticket-payment.module#TicketPaymentModule"
      },
      {
        path: "ticket/search-ticket",
        loadChildren:
          "./pages/ticket/search-ticket/ticket.module#SearchTicketModule"
      },
      {
        path: "ticket/update-ticket",
        loadChildren:
          "./pages/ticket/update-ticket/update-ticket.module#UpdateTicketModule"
      },
      {
        path: "users/add-user",
        loadChildren: "./pages/users/users.module#UsersModule"
      },
      {
        path: "users/manage-user",
        loadChildren:
          "./pages/users/manage-user/manageusers.module#ManageUserModule"
      },
      {
        path: "payment/search-payment",
        loadChildren:
          "./pages/payment/search-payment.module#SearchPaymentModule"
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "login",
        loadChildren:
          "./pages/authentication/authentication.module#AuthenticationModule"
      }
    ]
  }
];
