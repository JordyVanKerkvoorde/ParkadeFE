  
import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import OSM from 'ol/source/OSM';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import { ParkingDataService } from '../parking/parking-data.service';
import { Parking } from '../parking/parking.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ParkingListComponent } from '../parking/parking-list/parking-list.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map;
  testp;
  vectorSource;
  vectorLayer;
  rasterLayer;
  //features: Feature[];

  constructor(
    private _pds: ParkingDataService
  ) { }

  ngOnInit(): void {
    let parkingdata = new Array();

    this._pds.allParkings$.subscribe((parkings: Parking[])=>{
      parkings.forEach(parking => {

        let ftre: Feature = new Feature({
          geometry: new Point(fromLonLat([parking.longtitude, parking.latitude]))
        });

        ftre.setStyle(new Style({
          image: new Icon(({
            color: '#8959A8',
            crossOrigin: 'anonymous',
            src: 'assets/park.svg',
            imgSize: [30, 30]
          }))
        }));

        parkingdata.push(ftre)
      });
    })

    this.vectorSource = new VectorSource({
      features: parkingdata
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });
    this.initializeMap();
  }

  initializeMap(){
    this.map = new Map({
      target: 'map',
      layers: [ new TileLayer({
        source: new OSM()
      }), this.vectorLayer ],
      view: new View({
        center: fromLonLat([3.7219431, 51.054633]),
        zoom: 15,
      })
    });
  }
}

    // //create new feature
    // let ftre: Feature = new Feature({
    //   geometry: new Point(fromLonLat([3.7219431, 51.054633]))
    // });
    // //style feature to be icon
    // ftre.setStyle(new Style({
    //   image: new Icon(({
    //     color: '#8959A8',
    //     crossOrigin: 'anonymous',
    //     src: 'assets/park.svg',
    //     imgSize: [30, 30]
    //   }))
    // }));
    // //add feature to array
    // console.log("workingFTRE")
    // console.log(features)
    // features.push(ftre)
