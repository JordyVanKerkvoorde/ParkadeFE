import { ParkingDataService } from '../dataservices/parking-data.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Parking } from '../models/parking.model';
import { SuggestionDataService } from '../../suggestions/suggestion-data.service';
import { Suggestion } from '../../suggestions/suggestion.model';

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
    private _pds: ParkingDataService,
    private _sds: SuggestionDataService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params =>{
      this.id = parseInt(params.get('id'));
    });

    this._pds.getParking$(this.id).subscribe((parking: Parking) =>{
      this.parking = parking
      console.log(parking.latestEntry)
    });

    
  }

  onClick(){
    
  }
}
