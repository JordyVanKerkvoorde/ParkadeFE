import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';
import OSM from 'ol/source/OSM';
import { Title } from '@angular/platform-browser';

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
  // reep = {
  //   naam: "Reep",
  //   latitude: 51.05207,
  //   longtitude: 3.72981,
  //   maxcap: 450,
  // }
  constructor() { }

  ngOnInit(): void {
    this.testp = new Feature({
      geometry: new Point(fromLonLat([51.05207 , 3.72981]))
    });
    
    this.testp.setStyle(new Style({
      image: new Icon(({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        src: 'assets/car-parking.svg',
        imgSize: [20, 20]
      }))
    }));

    this.vectorSource = new VectorSource({
      features: [this.testp]
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    });

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
