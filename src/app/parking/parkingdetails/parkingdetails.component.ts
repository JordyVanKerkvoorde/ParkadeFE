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
    private _route: ActivatedRoute,
    private _pds: ParkingDataService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params =>{
      this.id = parseInt(params.get('id'));
    });

    this._pds.getParking$(this.id).subscribe((parking: Parking) =>{
      this.parking = parking
    });
    
  }
}
