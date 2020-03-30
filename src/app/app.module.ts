import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParkingComponent } from './parking/parking.component';
import { ParkinfoComponent } from './parking/parkinfo/parkinfo.component';
import { ParkstatusComponent } from './parking/parkstatus/parkstatus.component';
import { ParkstatisticsComponent } from './parking/parkstatistics/parkstatistics.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingComponent,
    ParkinfoComponent,
    ParkstatusComponent,
    ParkstatisticsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
