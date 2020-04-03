import { ParkingDataService } from '../parking-data.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Parking } from '../parking.model';

@Component({
  selector: 'app-parkingdetails',
  templateUrl: './parkingdetails.component.html',
  styleUrls: ['./parkingdetails.component.css']
})
export class ParkingdetailsComponent implements OnInit {
  parking: Parking;
  id: number;
  constructor(
    private _parkingDataService: ParkingDataService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this._route.data
      .subscribe((data: {parking: Parking}) => {
        this.id = data.parking.id;
        this.parking = data.parking;
      });
  }

}
