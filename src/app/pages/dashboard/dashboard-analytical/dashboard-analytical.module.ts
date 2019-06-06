import { BookingSummaryComponent } from './booking-summary/booking-summary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAnalyticalComponent } from './dashboard-analytical.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { AgentSummaryComponent } from './agent-summary/agent-summary.component';
import { RevenueSummaryComponent } from './revenue-summary/revenue-summary.component';
import { DateSummaryComponent } from './date-summary/date-summary.component';
import { ZoneSummaryComponent } from './zone-summary/zone-summary.component';

export const AnalyticalRoutes: Routes = [
  {
    path: '',
    component: DashboardAnalyticalComponent,
    data: {
      heading: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AnalyticalRoutes),
    SharedModule
  ],
  declarations: [DashboardAnalyticalComponent,
                AgentSummaryComponent,
                RevenueSummaryComponent, 
                DateSummaryComponent, 
                ZoneSummaryComponent,
                BookingSummaryComponent]
})
export class DashboardAnalyticalModule { }
