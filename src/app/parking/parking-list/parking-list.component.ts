import { Component, OnInit } from '@angular/core';
import { Parking } from '../parking.model';
import { ParkingDataService } from '../parking-data.service';
import { Subject, Observable, of, EMPTY, merge } from 'rxjs';
import {
  distinctUntilChanged,
  debounceTime,
  map,
  filter,
  catchError,
  scan
} from 'rxjs/operators';

import { ActivatedRoute }     from '@angular/router';
import { switchMap }      from 'rxjs/operators';
import { Router } from '@angular/router'


@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {
  
  public filterParkingName: string;
  public filterParking$ = new Subject<string>();
  private _fetchParkings$: Observable<Parking[]>;

  public errorMessage: string = '';

  parkingslist$: Observable<Parking>;
  selectedId: number;
  

  constructor(
    private _parkingDataService: ParkingDataService,
    
    private _route: ActivatedRoute,
    private _router: Router
    ) {
    this.filterParking$
      .pipe(
        distinctUntilChanged(),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterParkingName = val));
   }

  ngOnInit(): void {
    console.log('loading parking.list');
    this._fetchParkings$ = this._parkingDataService.allParkings$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY;
      })
    );
  }

  applyFilter(filter: string){
    this.filterParkingName = filter;
  }

  get parkings$(): Observable<Parking[]>{
    return this._fetchParkings$;
  }

  onClick(parkingId: number){
    this._router.navigate(['parking', parkingId]);
  }
}
