import { TicketingService } from './../../../../services/ticketing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  seatsFound: any
  from_city: any;
  to_city: any;
  from_id: any
  to_id: any
  route: string;
  bus_id: any;
  travel_date: any;
  seater: any;
  loadingSeats: boolean = true;
  selectedSeats: any[] = [];
  ticket_type: any;
  bookingForm: FormGroup;
  passangers: FormArray;
  referenceNumber: number;
  loop_counter = 0;

  showBookingProgress:boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private ticketService: TicketingService, private fb: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.initializeForm()
    this.getReferenceNumber()
    this.activatedRoute.params.subscribe(params => {
      this.from_city = params['from_city']
      this.to_city = params['to_city']
      this.from_id = params['from_id']
      this.to_id = params['to_id']
      this.travel_date = params['travel_date']
      this.bus_id = params['bus_id']
      this.route = params['route']
      this.seater = params['seater']

      this.getVehicleData(this.from_id, this.to_id, this.travel_date.split(',')[0], this.bus_id)
      console.log('Seater from bookimg'+this.seater)
    })
  }
  initializeForm() {
    this.bookingForm = this.fb.group({
      payment_method: ['3', Validators.required],
      reference_number: '',
      passangers: this.fb.array([])
    })
  }

  getVehicleData(from: number, to: number, date: string, vehicle_id: number) {
    this.ticketService.getVehicleDetails(from, to, date, vehicle_id).subscribe(data => {
      if (data.response_code == 0) {
        this.loadingSeats = false;
        // this.seatsFound = data.seats[0].name
        this.seatsFound = data.seats[0].name.split(" ").join("").split(',');
        console.log(this.seatsFound)

      } else {
        console.log(`An Error Has occured ${data.response_message}`)

      }
    })
  }
  onseatSelection($event) {
    let index = this.selectedSeats.indexOf($event);
    if (index == -1) {
      this.selectedSeats.push($event)
      this.addFormField($event)
      this.getTicketType($event)

    } else {
      this.selectedSeats.splice(index, 1)
      console.log(`Removing Seat ${$event}`)
      this.passangers.removeAt(index)

    }
    console.log(`Seat Selected ${this.selectedSeats}`)
  }
  addFormField(seatNo) {
    this.passangers = this.bookingForm.get('passangers') as FormArray;
    this.passangers.push(this.createItem(seatNo))
    console.log(`Adding Field for Seat No ${seatNo}`)
  }
  getTicketType(seat: any) {
    console.log("calling get ticket details");
    this.ticketService.getTicketDetails(this.from_id, this.to_id, this.travel_date.split(',')[0], this.bus_id, this.seater, seat).subscribe(data => {
      this.ticket_type = data.ticket_type[0].id
    })
  }
  createItem(seatNo): FormGroup {
    return this.fb.group({
      phone_number: ['', Validators.minLength(10)],
      id_number: [''],
      passenger_name: ['', Validators.required],
      email_address: [''],
      selected_seat: seatNo,
      insurance_charge: '',
      served_by: 'Web App',
      amount_charged: '',
    });
  }
  get passanger() {
    return this.bookingForm.get('passangers') as FormArray;
  }
  getReferenceNumber() {
    this.ticketService.generateReferenceNumber().subscribe(data => {
      this.referenceNumber = data.reference_number;
      console.log(data)
      this.bookingForm.get('reference_number').setValue(data.reference_number)
    })
  }
  reserveSeat() {
    this.showBookingProgress = true;
    console.log('submitting data ....' + this.bookingForm.value)
    let numOfPassangers = this.bookingForm.get('passangers').value.length;
    console.log(`Booking details ${numOfPassangers} Ticket Type ${this.ticket_type}`)
    this.asyncForEach(this.passanger.value, (res) => {     
      let from_city = this.from_id
      let to_city = this.to_id
      let travel_date = this.travel_date.split(',')[0]
      let selected_vehicle = this.bus_id
      let seater = this.seater
      let selected_ticket_type = this.ticket_type
      let selected_seat = res.selected_seat
      let payment_method = this.bookingForm.get('payment_method').value
      let phone_number = res.phone_number;
      let passenger_name = res.passenger_name;
      let email_address = res.email_address;
      let id_number = res.id_number;
      let insurance_charge = res.insurance_charge;
      let served_by = res.served_by;
      let amount_charged = "";
      let reference_number = this.referenceNumber;

      this.ticketService.reserveBooking(from_city, to_city, travel_date, selected_vehicle, seater,
        selected_ticket_type, selected_seat, payment_method, phone_number, passenger_name, email_address,
        id_number, insurance_charge, served_by, amount_charged, reference_number).subscribe(data => {
          this.loop_counter += 1;
          console.log("sucess loop counter", this.loop_counter, "no pass", numOfPassangers)
          console.log(data)
          this.showBookingProgress=false;

          if (this.loop_counter == numOfPassangers) {
            this.navigateToPayment()
          }
        }, error => {
          this.loop_counter += 1;
          console.log("error loop counter", this.loop_counter, "no pass", numOfPassangers)
          console.log('an  error has occured' + error);
          if (this.loop_counter == numOfPassangers) {
            this.navigateToPayment()
          }
        })


    })
  }
  public navigateToPayment() {
    console.log("Reference NO" + this.referenceNumber);
    this.router.navigate(['/ticket/payment', { ref_no: this.referenceNumber }])

    this.bookingForm.reset();
}
  public async  asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await this.waiting(1000)
      await callback(array[index], index, array);

    }
  }
  public waiting(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

}
