import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParkinfoComponent} from './parkinfo/parkinfo.component';
import {ParkstatusComponent} from './parkstatus/parkstatus.component';
import {ParkingComponent} from './parking/parking.component';
import {ParkingListComponent} from './parking-list/parking-list.component'
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ParkingFilterPipe } from './parking-filter.pipe';
import { ParkingdetailsComponent } from './parkingdetails/parkingdetails.component';
import { ParkingdetailsResolverService } from './parkingdetails-resolver.service';
import { ChartComponent } from './chart/chart.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    ParkinfoComponent, 
    ParkstatusComponent, 
    ParkingComponent, 
    ParkingListComponent,
    ParkingFilterPipe,
    ParkingdetailsComponent,
    ChartComponent,
  ],
  imports: [CommonModule, HttpClientModule, MaterialModule, ],
  exports: [ParkingListComponent]
})
export class ParkingModule {
}
