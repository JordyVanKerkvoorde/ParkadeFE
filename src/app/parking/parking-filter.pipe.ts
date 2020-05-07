import { Pipe, PipeTransform } from '@angular/core';
import { Parking } from './models/parking.model';

@Pipe({
  name: 'parkingFilter'
})
export class ParkingFilterPipe implements PipeTransform {
  transform(parkings: Parking[], name: string): Parking[] {
    if (!name || name.length === 0) {
      return parkings;
    }
    return parkings.filter(par =>
      par.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }
}