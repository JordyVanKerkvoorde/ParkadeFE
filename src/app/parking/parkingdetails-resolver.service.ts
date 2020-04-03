import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, EMPTY, empty }  from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { Parking } from './parking.model';
import { ParkingDataService } from './parking-data.service';

@Injectable({
  providedIn: 'root'
})
export class ParkingdetailsResolverService implements Resolve<Parking>{

  constructor(private router: Router, private pds: ParkingDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Parking> | Observable<never> {
    let id: number = parseInt(route.paramMap.get('id'));

    return this.pds.getParking$(id).pipe(
      take(1),
      mergeMap(parking => {
        if(parking){
          return of(parking);
        }else{
          this.router.navigate(['/parkinglist']);
          return EMPTY;
        }
      })
    )
  }
}
