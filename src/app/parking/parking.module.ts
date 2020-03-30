import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParkinfoComponent} from './parkinfo/parkinfo.component';
import {ParkstatusComponent} from './parkstatus/parkstatus.component';
import {ParkingComponent} from './parking.component';
import {ParkingListComponent} from './parking-list/parking-list.component'
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ParkinfoComponent, ParkstatusComponent, ParkingComponent, ParkingListComponent],
  imports: [CommonModule, HttpClientModule, MaterialModule],
  exports: [ParkingListComponent]
})
export class ParkingModule {
}
