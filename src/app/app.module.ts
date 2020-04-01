import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParkingComponent } from './parking/parking/parking.component';
import { ParkinfoComponent } from './parking/parkinfo/parkinfo.component';
import { ParkstatusComponent } from './parking/parkstatus/parkstatus.component';
import { ParkstatisticsComponent } from './parking/parkstatistics/parkstatistics.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParkingListComponent } from './parking/parking-list/parking-list.component';
import { ParkingModule } from './parking/parking.module';
import { MaterialModule } from './material/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MapModule } from './map/map.module';

@NgModule({
  declarations: [AppComponent, MainNavComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ParkingModule,
    MaterialModule,
    MapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
