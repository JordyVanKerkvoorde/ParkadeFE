import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectivePreloadStrategy } from './SelectivePreloadStrategy';
import { ParkingListComponent } from './parking/parking-list/parking-list.component';
import { ParkingdetailsComponent } from './parking/parkingdetails/parkingdetails.component';
import { ParkingdetailsResolverService } from './parking/parkingdetails-resolver.service';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

const appRoutes: Routes = [
  { path: 'parkinglist', component: ParkingListComponent },
  { path: 'parking/:id', component: ParkingdetailsComponent},
  { path: 'map', component: MapComponent },
  { path: 'about', component: AboutComponent} ,
  { path: 'contact', component: ContactComponent },
  { path: 'suggestions', component: SuggestionsComponent },

  { path: '', redirectTo: 'map', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes),
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: SelectivePreloadStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}