import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService:AuthenticationService, private router:Router) { }
  canActivate(){
    if(this.authService.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['/login'])
      return false;
    }

   
  }

}
