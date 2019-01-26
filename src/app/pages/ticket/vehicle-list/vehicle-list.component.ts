import { Component, OnInit, Input } from '@angular/core';
import { Bus } from '../../../models/bus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  @Input()
  availableBuses:Bus[];
  @Input() from_id;
  @Input() to_id;
  @Input() traveling_date;
  columns = [
    { prop: 'Select Vehicle' },
    { name: 'Manifest' }
  ];

  constructor(private router:Router) { 

  }

  ngOnInit() {
  }
  LoadVehicle(bus:Bus){
    console.log(`Bus Clicked ${bus}`)
    this.router.navigate(['/ticket/booking', {
      from_id:this.from_id,
      to_id:this.to_id,
      travel_date:bus.departure_time,
      bus_id:bus.id,
      from_city:bus.from,
      to_city:bus.to,
      route:bus.route,
      seater:bus.seats[0].seater
    }
    ])
  }

}
