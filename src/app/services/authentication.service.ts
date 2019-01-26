import { AuthResponse } from './../models/AuthRes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../models/constants';
import { userAuth } from '../models/UserAuth';

@Injectable()
export class AuthenticationService {

  constructor(public http: HttpClient,) { }

  authUser(user:userAuth){
    return  this.http.post<AuthResponse>(baseUrl,user)    
  }
  setUserDetails(url:string, user_api_key:string, username:string){
    window.localStorage.setItem('company_url',url)
    window.localStorage.setItem('user_api_key',user_api_key)
    window.localStorage.setItem('username',username)
  }
  clearUserDetails(){
    window.localStorage.removeItem('company_url')
    window.localStorage.removeItem('user_api_key')
    window.localStorage.removeItem('username')
  }
  
  getCompanyUrl(){
    return window.localStorage.getItem('company_url')
  }
  getUserApiKey(){
    return window.localStorage.getItem('user_api_key')
  }
  getUsername(){
    return window.localStorage.getItem('username')
  }
  isAuthenticated():boolean{
    if(this.getCompanyUrl() != null){
      return true
    } else{
      return false;
    }   
  }
  logOut(){
    this.clearUserDetails()
  }

}
