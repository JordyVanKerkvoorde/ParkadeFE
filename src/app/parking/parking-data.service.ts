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

  get allParkings$(): Observable<Parking[]>{
    return this.parkings$;
  }

  get parkings$(): Observable<Parking[]>{
    return this.http.get(`${environment.apiUrl}/Parking`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Parking[] => list.map(Parking.fromJSON))
    );
    
  }

  getParking$(id: number): Observable<Parking>{
    return this.http
      .get(`${environment.apiUrl}/Parking/${id}`)
      .pipe(catchError(this.handleError), map(Parking.fromJSON));
  }

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      console.log(err);
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    return throwError(errorMessage);
  }
}
