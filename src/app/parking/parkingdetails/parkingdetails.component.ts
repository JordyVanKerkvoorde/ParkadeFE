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
  name: string;
  constructor(
    private _route: ActivatedRoute,
    private _pds: ParkingDataService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params =>{
      this.id = parseInt(params.get('id'));
    });
    this._pds.getParking$(this.id).subscribe((parking: Parking) =>{
      console.log(parking); //deze geeft mooi het parking object weer
      this.parking = parking;
      this.name = parking.name;
    });
    console.log(this.parking) //deze geeft undefined
  }
}
