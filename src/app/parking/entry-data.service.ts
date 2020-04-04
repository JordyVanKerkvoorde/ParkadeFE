import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { map, catchError, tap, shareReplay, switchMap } from 'rxjs/operators';
import { Entry } from './entry.model';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntryDataService {
  
  private _entry$ = new BehaviorSubject<Entry[]>([]);
  private _entry: Entry;
  
  constructor(private http: HttpClient) {
   }


  getEntry$(parkingId): Observable<Entry>{
    return this.http
      .get(`${environment.apiUrl}/Entry/${parkingId}`)
      .pipe(catchError(this.handleError), map(Entry.fromJSON));
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
