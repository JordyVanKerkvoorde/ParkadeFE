import { ParkingDataService } from '../dataservices/parking-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Parking } from '../models/parking.model';
import { Entry } from '../models/entry.model';
import { EntryDataService } from '../dataservices/entry-data.service';
import { Subject, Observable, of, EMPTY, merge } from 'rxjs';
import {
  distinctUntilChanged,
  debounceTime,
  map,
  filter,
  catchError,
  scan
} from 'rxjs/operators';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
@Input() public parking: Parking;

public errorMessage: string = '';
  public show: boolean = false;
  public btnNaam: string = "Meer weergeven"

  public status: string;
  public bezettingsgraad: number;

  constructor(
      private _parkingDataService: ParkingDataService,
      private _entryDataService: EntryDataService
    ) {
     }

  calculate(){
    this.bezettingsgraad = 1 - (this.parking.latestEntry.available / this.parking.maxcap);
    switch (true){
      case this.bezettingsgraad == 0:
        this.status = 'leeg';
        break;
      case this.bezettingsgraad <= 50:
        this.status = 'lage drukte';
        break;
      case 50 < this.bezettingsgraad && this.bezettingsgraad <= 70:
        this.status = 'gemiddelde drukte';
        break;
      case 70 < this.bezettingsgraad && this.bezettingsgraad < 90:
        this.status = 'druk';
        break;
      case this.bezettingsgraad >= 90 && this.bezettingsgraad < 100:
        this.status = 'bijna volzet'
    }
  }

  toggle(){
    this.show = !this.show
    if(this.show){
      this.btnNaam = "Minder weergeven"
    }else{
      this.btnNaam = "Meer weergeven"
    }
  }

  ngOnInit(): void {
  }

}
