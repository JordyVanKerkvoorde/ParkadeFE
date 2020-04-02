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
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'parkinglist', component: ParkingListComponent },
  { path: 'map', component: MapComponent },
  { path: 'about', component: AboutComponent} ,
  { path: 'contact', component: ContactComponent },

  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, MainNavComponent, PageNotFoundComponent, AboutComponent, ContactComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ParkingModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    MapModule,
    PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
