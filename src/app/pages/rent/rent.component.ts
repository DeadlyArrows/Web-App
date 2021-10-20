import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'],
})
export class RentComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private router: Router, private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.loadDataVehicles();
  }

  loadDataVehicles() {
    this.vehicleService.getVehicleList().subscribe((vehicles) => {
      console.log(vehicles);
      this.vehicles = vehicles;
      console.log(this.vehicles);
    });
  }
}
