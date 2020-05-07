  
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
import { ParkingDataService } from '../parking/dataservices/parking-data.service';
import { Parking } from '../parking/models/parking.model';
import Select from 'ol/interaction/Select';
import {click, pointerMove, altKeyOnly} from 'ol/events/condition';
import { Router } from '@angular/router';

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
    private _pds: ParkingDataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let parkingdata = new Array();
    let select = new Select({
      condition: click
    });
    
    

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
            imgSize: [25, 25]
          }))
        }));
        
        ftre.setId(parking.id)

        select.getFeatures().push(ftre)
        parkingdata.push(ftre)
      });
      this.vectorSource = new VectorSource({
        features: parkingdata
      });
      
      this.vectorLayer = new VectorLayer({
        source: this.vectorSource
      });


      this.initializeMap();
      this.map.addInteraction(select);
      select.on('select', function(e) {
        try {
          let id: number = e.target.getFeatures().array_[0].id_;
           console.log(id);
           //not working yet :(
           this.router.navigate([`parking/${id}`]);
        } catch (error) {
        }
      });
    })
  }

  initializeMap(){
    this.map = new Map({
      target: 'map',
      layers: [ new TileLayer({
        source: new OSM()
      }), this.vectorLayer ],
      view: new View({
        center: fromLonLat([3.7219431, 51.048919]),
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
