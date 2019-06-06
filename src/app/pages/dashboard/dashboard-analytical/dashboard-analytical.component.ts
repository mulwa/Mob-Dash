import { RegNumber } from './../../../models/DashboardModel/organizationAccount';
import { Vehicle } from './../../../models/DashboardModel/ticketReport';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { TicketingService } from '../../../services/ticketing.service';
import { Agent, Office, IDate } from '../../../models/DashboardModel/ticketReport';
import { Ticket } from '../../../models/ticketRes';
declare var $: any;
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dashboard-analytical',
  templateUrl: './dashboard-analytical.component.html',
  styleUrls: ['../../../../assets/plugins/css-chart/css-chart.css'],
  providers: [DatePipe]
})
export class DashboardAnalyticalComponent implements OnInit { 
  public toAgent = "mesage to agent page"
  public AgentData:Agent[];
  public OfficeData:Office[];
  public DateData:IDate[];
  public TicketData:Ticket[];
  public VehicleData: Vehicle[];   
  public totalReceived;
  public totalBanked;
  public totalDue;

  public reg_numberData:RegNumber[];
  public totalCashIn;
  public totalCashOut;
  public totalTickets;
  public showLoading:boolean = true;
  public currentDate;
  defaultDateSelected: Date;

  constructor(private ticketService:TicketingService, private datePipe: DatePipe) { 
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.defaultDateSelected = new Date(this.currentDate);
  }

  ngOnInit() {
    this.generateReport(this.currentDate,this.currentDate);

    this.ticketService.getOrganizationAccount().subscribe(data => {
      this.showLoading = false;
      this.reg_numberData = data.reg_numbers;
      console.log(this.reg_numberData)
      this.totalCashIn = this.reg_numberData.map(x => parseInt(x.total_cash_in)).reduce((a,b)=> a+b);
      this.totalCashOut = this.reg_numberData.map(x => parseInt(x.total_cash_out)).filter((x) => x > 0).reduce((a,b)=> a+b);
      console.log('total cashout'+this.totalCashOut)
     
    });   
    
    
  }
  generateReport(todate,fromdate){
    this.showLoading = true;
    let todatefor;
    let fromdatefor
    if(typeof(todate.inputText) != "undefined" && typeof(todate.inputText) != "undefined"){
      todatefor = todate.inputText.replace(/\//g, "-");
      fromdatefor = fromdate.inputText.replace(/\//g, "-");
    }else{
      todatefor = this.currentDate;
      fromdatefor = this.currentDate

    }
    
    console.log(todatefor +fromdatefor)

    this.ticketService.getTicketingReport(fromdatefor,todatefor).subscribe(data =>{
      this.showLoading = false;
      console.log(data.agents)
      this.AgentData = data.agents;
      this.OfficeData = data.offices;
      this.DateData = data.dates;
      this.TicketData = data.tickets;
      this.VehicleData = data.vehicles;

     this.totalReceived = this.AgentData.map(x => x.received).reduce((a,b)=>a+b);
     this.totalBanked = this.AgentData.map(x=>x.banked).reduce((a,b) => a+b)
     this.totalDue = this.AgentData.map(x => x.due).reduce((a,b)=>a+b)
     this.totalTickets = this.VehicleData.map(x => x.tickets).reduce((a,b)=> a+b);
    }); 


  }
  

}
