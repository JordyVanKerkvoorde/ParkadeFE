import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { map, catchError, tap, shareReplay, switchMap } from 'rxjs/operators';
import { Parking } from './parking.model';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParkingDataService {
  private _parkings$ = new BehaviorSubject<Parking[]>([]);
  private _parkings: Parking [];

  constructor(private http: HttpClient) {
    this._parkings$
    .pipe(
      catchError(err => {
        this._parkings$.error(err);
        return throwError(err);
      })
    )
    .subscribe((parkings: Parking[]) => {
      this._parkings = parkings;
      this._parkings$.next(this._parkings);
    });
   }

  get parkings(): Parking[]{
    return this._parkings
  }
}
