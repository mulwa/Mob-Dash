import { Ticket } from './../ticketRes';
export interface TicketReport {
    response_code: number,
    response_message:string,
    reports:any[],
    agents:Agent[],
    vehicles:Vehicle[],
    dates:IDate[],
    offices:Office[],
    tickets:Ticket[]
}

export interface Agent{
    name:string,
    received:number,
    banked:number,
    due:number,
    banking_enforce:boolean,
    retainer:number,
    deficit:string,
    reference_number:string,
    pay:Pay[]

}
export interface Pay {
    id:number,
    name:string,
    reference_number:string,
    amount:string,
    instructions:any[]
}
export interface Vehicle {
    name:string,
    tickets:number,
    received:number
}
export interface IDate {
    name:string,
    tickets:number,
    received:number,
}
export interface Office{
    name:string,
    tickets:number,
    received:number,
}