import { ParkingDataService } from '../parking-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Parking } from '../parking.model';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
@Input() public parking: Parking;

  constructor(private _parkingDataService: ParkingDataService) { }

  ngOnInit(): void {
  }

}
