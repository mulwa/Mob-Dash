import { Injectable } from '@angular/core';
import {  hash, ReferenceNumberUrl, username } from '../models/constants';
import { TicketResponse } from '../models/ticketRes';
import { HttpClient } from '@angular/common/http';
import { LocationResponse } from '../models/location-response';
import { TravelDateResponse } from '../models/travel-date-response';
import { AvailableBusResponse } from '../models/available-bus-response';
import { VehicleDetailsI } from '../models/responseI';
import { ReferenceRes } from '../models/ReferenceResp';
import { ReservationRes } from '../models/reservationResponse';
import { Reservation } from '../models/reservationI';
import { mpesaResponse } from '../models/mpesaRes';
import { responseI } from '../models/response.1';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class TicketingService {
  public username:string
  public api_key: string
  public base_url:string 

  constructor(private http:HttpClient, private authService:AuthenticationService) {
    this.username = this.authService.getUsername();
    this.api_key = this.authService.getUserApiKey()
    this.base_url = this.authService.getCompanyUrl()
   }

   // gets all available cities
   public getCitites(){   
    const cityParams = {
      username: this.username,
      api_key: this.api_key,
      action:"AvailableCities"    
    }
    return this.http.post<LocationResponse>(this.base_url,cityParams);
  }

  getTicketInfor(phone_number:string){
    let body = {
      username:this.username,
      api_key:this.api_key,
      action:"SearchTicket",
      identifier:phone_number
    }  
    return this.http.post<TicketResponse>(this.base_url,body)
  }
  // gets travelling dates
  getTravelDates(){
    const cityParams = {
      username: this.username,
      api_key: this.api_key,
      action:"AvailableDates"    
    }
    return this.http.post<TravelDateResponse>(this.base_url,cityParams);
  }
  getAvaliableVehicle(from:number,to_id:number, travel_date:string){
    let body = {
      username: this.username,
      api_key: this.api_key,
      action:"SearchSchedule",
      hash:hash,
      travel_from:from,
      travel_to:to_id,      
      travel_date:travel_date,               
    }
    return this.http.post<AvailableBusResponse>(this.base_url,body);
  }
  getVehicleDetails(from:number,to_id:number, travel_date:string,selected_vehicle:number){
    let body = {
      username: this.username,
      api_key: this.api_key,
      action:"AvailableSeats",
      hash:hash,
      from_city:from,
      to_city:to_id,
      travel_date:travel_date,
      selected_vehicle:selected_vehicle         
    }
    console.log(body)
    return this.http.post<VehicleDetailsI>(this.base_url,body);

  }
  getTicketDetails(from:number,to_id:number, travel_date:string,selected_vehicle:number,
    seater:number,selected_seat:number){
    let body = {
      username: this.username,
      api_key: this.api_key,
      action:"TicketTypes",
      hash:hash,
      from_city:from,
      to_city:to_id,
      travel_date:travel_date,
      selected_vehicle:selected_vehicle,
      selected_seat:selected_seat,
      seater:seater    
              
    }
    console.log(body)
    return this.http.post<VehicleDetailsI>(this.base_url,body);
  }
  generateReferenceNumber(){  
    let body = {
      developer_username: this.username,
      developer_api_key: this.api_key,
      action:"generatereferencenumber"
    }
  return this.http.put<ReferenceRes>(ReferenceNumberUrl,body);  
  }

  reserveBooking(from_city:number, to_city:number, travel_date:string, selected_vehicle:number, seater:number, selected_ticket_type:number, selected_seat:number, 
    payment_method:number, phone_number:string, passenger_name:string, email_address:string, id_number:string,
     insurance_charge:string, served_by:string, amount_charged:string, reference_number:number){
    let body:Reservation = {
      username:this.username,
      api_key:this.api_key,
      hash:hash,
      action:'ReserveSeats',
      from_city:from_city,
      to_city:to_city,
      travel_date:travel_date,      
      selected_vehicle:selected_vehicle,
      seater:seater,  
      selected_ticket_type:selected_ticket_type, 
      selected_seat:selected_seat,         
      payment_method:payment_method,
      phone_number: phone_number,
      id_number:id_number,
      passenger_name:passenger_name,
      email_address: email_address,
      insurance_charge:insurance_charge,
      served_by:this.username,
      amount_charged: amount_charged,
      reference_number: reference_number
    }    
    // console.log(body)   
    return this.http.post<ReservationRes>(this.base_url,body)      
    
    
  }
  mpesaPayment(referenceNo, phone_number){
    let body = {
      username:username,
      api_key:this.api_key,
      action:"AuthorizePayment",
      payment_method:"3",
      reference_number:referenceNo,
      mpesa_phone_number:phone_number
    }
    return this.http.post<mpesaResponse>(this.base_url,body)
    
  }
  authorizeJamboPayment(jambopay_username, password, referenceNo){
    let body = {
    username:this.username,
    api_key:this.api_key,
    action:"AuthorizePayment",
    payment_method:"2",
    reference_number:referenceNo,
    jambopay_wallet_username:jambopay_username,
    jambopay_wallet_password:password
  }
  console.log('authorizeJamboPayment value set to server'+JSON.stringify(body))
  return this.http.post<responseI>(this.base_url,body);
  
  }

  



}
