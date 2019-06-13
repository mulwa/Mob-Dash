import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layout/admin/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth/auth-layout.component';

import { AppRoutes } from './app.routing';
import { SharedModule } from './shared/shared.module';
import { TicketingService } from './services/ticketing.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { NgSelectModule } from '@ng-select/ng-select';






@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
  
    
        
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    SharedModule,
    FormsModule,
    // NgSelectModule,
    HttpClientModule,
   
    
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    TicketingService,AuthenticationService,AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
