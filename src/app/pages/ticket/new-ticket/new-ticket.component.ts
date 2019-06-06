import { TicketingService } from './../../../services/ticketing.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { City } from '../../../models/city';
import { Dates } from '../../../models/dates';
import { Bus } from '../../../models/bus';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css'],
  providers: [DatePipe]
})

export class NewTicketComponent implements OnInit {
  public searchForm:FormGroup;
  public cities:City[];
  public traveling_dates:Dates[];
  public showLoading:boolean;
  public traveling_date:any;
  availableBuses: Bus[] = [];
  currentDate: any = Date.now();
  currentTime: any;
  noVehicles:boolean = false;
  from_id:any;
  to_id:any;
  selectedOption = '21';
  searchableselect;
  travel_from ='21';
  travel_to = '16';
  travel_date;

  
  constructor(private fb:FormBuilder, private ticketingService:TicketingService, private datePipe: DatePipe,) { }

  ngOnInit() {    
    this.getCity()
    this.getTravelingDates()

    this.currentTime = this.datePipe.transform(this.currentTime, 'H:m');
    this.currentDate = this.datePipe.transform(this.currentDate, 'dd-MM-yyyy')
  }
 
  getCity(){
    this.ticketingService.getCitites().subscribe(data =>{
      this.cities = data.cities;
      // console.log(this.searchableselect)
     this.searchableselect = this.ticketingService.cloneOptions(data.cities)
     console.log(this.searchableselect)
    },error =>{
      console.log(`An Error has Occured ${error.message}`)
    })
  }
  getTravelingDates(){
    this.ticketingService.getTravelDates().subscribe(data =>{
      this.traveling_dates = data.dates;
      console.log(this.traveling_dates)
    }, error =>{
      console.log(`An Error Has Occured fetching Traveling Dates ${error.message}`)
    })
  }
  onSearch(){    
    this.noVehicles = false
    if(this.availableBuses.length > 0){
      this.availableBuses = []
    }    
    this.showLoading = true;
     this.from_id = this.travel_from
    this.to_id = this.travel_to
    this.traveling_date = this.travel_date   
    
    this.ticketingService.getAvaliableVehicle(this.from_id,this.to_id,this.traveling_date).subscribe(data =>{
      this.showLoading = false;
      if(data.bus.length > 0){
        data.bus.forEach((x) => {
          let deptureTime = x.departure_time.split(',')[1];         
            this.availableBuses.push(x)
            console.log(x)
          
        }) //end foreach

      }else{
        this.noVehicles = true;
        console.log('No Vehicle found Matching')
      }

    }, error =>{
      this.showLoading = false;
      console.log('An error Has Occured'+error)
    })

  }
  calculateTimeDiff(cTime, departureTime) {
    let hours;
    if (this.currentDate == this.traveling_date) {
      departureTime = departureTime.split(":");
      cTime = cTime.split(":");
      var startDate = new Date(0, 0, 0, departureTime[0], departureTime[1], 0);
      var endDate = new Date(0, 0, 0, cTime[0], cTime[1], 0);
      var diff = endDate.getTime() - startDate.getTime();

      hours = Math.floor(diff / 1000 / 60 / 60);
      diff -= hours * 1000 * 60 * 60;
      var minutes = Math.floor(diff / 1000 / 60);
      return hours;

    } else {
      return 0;
    }
    // return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;

  }

}
