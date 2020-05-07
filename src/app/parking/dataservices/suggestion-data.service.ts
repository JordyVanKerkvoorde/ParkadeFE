import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { map, catchError, tap, shareReplay, switchMap } from 'rxjs/operators';
import { Suggestion } from '../models/suggestion.model';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuggestionDataService {
  private _suggestions$ = new BehaviorSubject<Suggestion[]>([]);
  private _suggestions: Suggestion [];

  constructor(private http: HttpClient) {
    this._suggestions$
    .pipe(
      catchError(err => {
        this._suggestions$.error(err);
        return throwError(err);
      })
    )
    .subscribe((suggestions: Suggestion[]) => {
      this._suggestions = suggestions;
      this._suggestions$.next(this._suggestions);
    });
   }

  get allSuggestions$(): Observable<Suggestion[]>{
    return this.suggestions$;
  }

  get suggestions$(): Observable<Suggestion[]>{
    return this.http.get(`${environment.apiUrl}/Suggestion`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Suggestion[] => list.map(Suggestion.fromJSON))
    );
    
  }

  get suggestions(){
    this.suggestions$.subscribe(suggestions =>{
      this._suggestions = suggestions as Suggestion[];
    });
    return this._suggestions;
  }

  getSuggestion$(id: number): Observable<Suggestion>{
    return this.http
      .get(`${environment.apiUrl}/Suggestion/${id}`)
      .pipe(catchError(this.handleError), map(Suggestion.fromJSON));
  }

  addNewRecipe(suggestion: Suggestion) {
    return this.http
      .post(`${environment.apiUrl}/Suggestion/`, suggestion.toJSON())
      .pipe(catchError(this.handleError), map(Suggestion.fromJSON))
      .pipe(
        // temporary fix, while we use the behaviorsubject as a cache stream
        catchError((err) => {
          return throwError(err);
        }),
        tap((sug: Suggestion) => {
          this._suggestions$.next(this._suggestions);
        })
      );
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
